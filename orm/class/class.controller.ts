import {
    Request,
    Response,
    Router,
    NextFunction,
    RequestHandler,
} from 'express';
import { EntityRepository, Repository, getRepository } from "typeorm";
import Class from './class.entity';
import IController from "../../interface/controller.interface";
import NoClassException from '../../exceptions/NoClassException';

@EntityRepository(Class)
export class ClassController extends Repository<Class> implements IController {
    public path = '/class';
    public router = Router();
    private class = getRepository(Class);

    constructor() {
        super();

        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(
            this.path,
            // {} as RequestHandler,
            this.getAllClasses,
        );

        this.router.post(
            this.path,
            // {} as RequestHandler,
            this.postClass,
        );

        this.router.put(
            this.path,
            // {} as RequestHandler,
            this.putClass,
        );

        this.router.delete(
            this.path,
            // {} as RequestHandler,
            this.deleteClass,
        );

        this.router.get(
            `${this.path}/byName`,
            // {} as RequestHandler,
            this.getAllClassByUser,
        );
    }

    private getAllClasses = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const _class = await this.class.find({
            relations: ["teacher"],
            // where: { teacher: { id: 1 } }
        });

        console.log(_class);

        if (_class) response.send(_class);
        else next(new NoClassException());
    };

    private postClass = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const _class: Class = _request.body.class;

        const result = await this.class.save(_class);

        response.send(result);

    };

    private putClass = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const _class: Class = _request.body.class;

        const result = await this.class.save(_class);

        response.send(result);

    };

    private deleteClass = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const _class: Class = _request.body.class;

        const result = await this.class.remove(_class);

        response.send(result);

    };

    private getAllClassByUser = async (
        _request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        const { query } = _request;
        const nome = query.nome as string;
        console.log(nome);

        const _class = await this.findByName(nome);

        if (_class)
            response.send(_class);
        else next(new NoClassException());
    };

    findByName(name: string) {
        return this.class.createQueryBuilder("class")
            .where("class.name = :name", { name })
            .getOne();
    }
}