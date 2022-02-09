import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import Class from "./class.entity";
import Teacher from "../teacher/teacher.entity";
import NoClassException from "../../exceptions/NoClassException";

export default class ClassController {
  async getAllClasses(
    _request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const classRepository = getRepository(Class);
      if (!classRepository) throw new NoClassException();

      const classes = await classRepository.find();

      return response.status(200).send(classes);
    } catch (error) {
      return response.status(400).send(error);
    }
  }

  createClass = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    try {
      const { name, educationLevel, teacherId, schoolYear } = request.body;

      console.log(name, educationLevel, teacherId, schoolYear);

      const classRepository = getRepository(Class);
      if (!classRepository) throw new NoClassException();

      const teacherRepository = getRepository(Teacher);

      const isClassExist = await classRepository.findOne({ name: name });

      if (isClassExist) {
        return response.status(400).send("Class already exist");
      }

      const teacher = await teacherRepository.findOne({ id: teacherId });
      if (!teacher) throw new Error("Teacher not found");

      const newClass = classRepository.create({
        name,
        educationLevel,
        teacher: teacher,
        schoolYear,
      });

      const result = await classRepository.save(newClass);

      return response.status(201).send(result);
    } catch (error) {
      return response.send(error);
    }
  };

  putClass = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const classReq: Class = _request.body.class;
      const classRepository = getRepository(Class);

      const result = await classRepository.save(classReq);

      return response.send(result);
    } catch (error) {
      return response.status(400).send(error);
    }
  };

  deleteClass = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const classRepository = getRepository(Class);
      if (!classRepository) throw new NoClassException();

      const classReq: Class = _request.body.class;

      const result = await classRepository.remove(classReq);

      response.send(result);
    } catch (error) {
      return response.status(400).send(error);
    }
  };

  getAllClassByUser = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { query } = _request;
      const nome = query.nome as string;

      const classReq = await this.findByName(nome);

      if (classReq) response.send(classReq);
      else next(new NoClassException());
    } catch (error) {
      return response.status(400).send(error);
    }
  };

  findByName(name: string) {
    const classRepository = getRepository(Class);
    return classRepository
      .createQueryBuilder("class")
      .where("class.name = :name", { name })
      .getOne();
  }
}
