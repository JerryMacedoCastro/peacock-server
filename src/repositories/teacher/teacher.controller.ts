import {
    Request,
    Response,
    Router,
    NextFunction,
    RequestHandler,
} from 'express';
import { EntityRepository, Repository, getRepository } from "typeorm";
import Teacher from "./teacher.entity";
import IController from "../../interface/controller.interface";
import NoTeachersException from '../../exceptions/NoTeachersException';

@EntityRepository(Teacher)
export class TeacherController extends Repository<Teacher> implements IController {
    public path = '/teacher';
    public router = Router();
    private teacher = getRepository(Teacher);

    constructor() {
        super();
        console.log("entrou aqui");
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(
            this.path,
            // {} as RequestHandler,
            this.getAllTeachers,
        );

        this.router.post(
            this.path,
            // {} as RequestHandler,
            this.postTeacher,
        );

        this.router.put(
            this.path,
            // {} as RequestHandler,
            this.putTeacher,
        );

        this.router.delete(
            this.path,
            // {} as RequestHandler,
            this.deleteTeacher,
        );

        this.router.get(
            `${this.path}/byName`,
            // {} as RequestHandler,
            this.getTeacherByName,
        );
    }

    private getAllTeachers = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const teachers = await this.teacher.find();
        if (teachers) response.send(teachers);
        else next(new NoTeachersException());
    };

    private postTeacher = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const teacher: Teacher = _request.body.teacher;

        const result = await this.teacher.save(teacher);

        response.send(result);

    };

    private putTeacher = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const teacher: Teacher = _request.body.teacher;

        const result = await this.teacher.save(teacher);

        response.send(result);

    };

    private deleteTeacher = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const teacher: Teacher = _request.body.teacher;

        const result = await this.teacher.remove(teacher);

        response.send(result);

    };

    private getTeacherByName = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const { query } = _request;
        const nome = query.nome as string;
        console.log(nome);

        const teacher = await this.findByName(nome);

        if (teacher)
            response.send(teacher);
        else next(new NoTeachersException());
    };

    findByName(name: string) {
        return this.teacher.createQueryBuilder("teacher")
            .where("teacher.name = :name", { name })
            .getOne();
    }
}