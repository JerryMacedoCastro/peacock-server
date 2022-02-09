import { Request, Response, Router, NextFunction } from "express";
import { EntityRepository, Repository, getRepository } from "typeorm";
import Teacher from "./teacher.entity";
import IController from "../../interfaces/controller.interface";
import NoTeachersException from "../../exceptions/NoTeachersException";

export default class TeacherController {
  async getAllTeachers(
    _request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const teacherRepository = getRepository(Teacher);
      if (!teacherRepository) throw new NoTeachersException();

      const teachers = await teacherRepository.find();

      return response.status(200).send(teachers);
    } catch (error) {
      return response.status(400).send(error);
    }
  }

  async createTeacher(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        email,
        academicEducation,
        birthDate,
        city,
        genre,
        nationality,
        state,
        teachingTime,
      } = request.body;

      const teacherRepository = getRepository(Teacher);
      if (!teacherRepository) throw new NoTeachersException();

      const isTeacherExist = await teacherRepository.findOne({
        name: name,
      });

      if (isTeacherExist) {
        return response.status(400).send("Teacher already exist");
      }

      const newTeacher = teacherRepository.create({
        name,
        email,
        academicEducation,
        birthDate,
        city,
        classes: [],
        genre,
        nationality,
        state,
        teachingTime,
      });

      const result = await teacherRepository.save(newTeacher);

      return response.status(201).send(result);
    } catch (error) {
      return response.send(error);
    }
  }

  putTeacher = async (
    _request: Request,
    response: Response,
    next: NextFunction,
  ) => {

    try {
      const teacherRepository = getRepository(Teacher);
      const teacher: Teacher = _request.body.teacher;

      const result = await teacherRepository.save(teacher);

      return response.send(result);

    } catch (error) {
      return response.status(400).send(error);
    }


  };

  deleteTeacher = async (
    _request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const teacher: Teacher = _request.body.teacher;
      const teacherRepository = getRepository(Teacher);

      const result = await teacherRepository.remove(teacher);

      return response.send(result);

    } catch (error) {
      return response.status(400).send(error);
    }

  };

  getTeacherByName = async (
    _request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const { query } = _request;
      const nome = query.nome as string;
      console.log(nome);

      const teacher = await this.findByName(nome);

      if (teacher)
        response.send(teacher);
      else next(new NoTeachersException());

    } catch (error) {
      return response.status(400).send(error);
    }
  }

  findByName(name: string) {
    const teacherRepository = getRepository(Teacher);
    return teacherRepository.createQueryBuilder("teacher")
      .where("teacher.name = :name", { name })
      .getOne();
  }
};

