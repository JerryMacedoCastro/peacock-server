import {
    Request,
    Response,
    Router,
    NextFunction,
    RequestHandler,
} from 'express';
import { EntityRepository, Repository, getRepository, createConnection } from "typeorm";
import Teacher from "./teacher.entity";
import IController from '../../interfaces/controller.interface';
import NoTeachersException from '../../exceptions/NoTeachersException';
import config from '../../../ormconfig';

@EntityRepository(Teacher)
export class TeacherController extends Repository<Teacher> implements IController {
    public path = '/teacher';
    public router = Router();
    private static teacher: Repository<Teacher>;

    constructor() {
        super();
        console.log("entrou aqui");
        this.initializeRoutes();
    }

    private async initializeRoutes() {
        await createConnection(config);
        TeacherController.teacher = getRepository(Teacher);
    }

    public getAllTeachers = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const teachers = await TeacherController.teacher.find();
        if (teachers) response.send(teachers);
        else next(new NoTeachersException());
    };

    public postTeacher = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const teacher: Teacher = _request.body.teacher;

        const result = await TeacherController.teacher.save(teacher);

        response.send(result);

    };

    public putTeacher = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const teacher: Teacher = _request.body.teacher;

        const result = await TeacherController.teacher.save(teacher);

        response.send(result);

    };

    public deleteTeacher = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const teacher: Teacher = _request.body.teacher;

        const result = await TeacherController.teacher.remove(teacher);

        response.send(result);

    };

    public getTeacherByName = async (
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
        return TeacherController.teacher.createQueryBuilder("teacher")
            .where("teacher.name = :name", { name })
            .getOne();
    }
}