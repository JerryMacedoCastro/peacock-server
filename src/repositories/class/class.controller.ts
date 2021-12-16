import { Request, Response, Router, NextFunction } from "express";
import { EntityRepository, Repository, getRepository } from "typeorm";
import Class from "./class.entity";
import IController from "../../interfaces/controller.interface";
import NoClassException from "../../exceptions/NoClassException";

@EntityRepository(Class)
export class ClassController extends Repository<Class> implements IController {
  public path = "/class";
  public router = Router();
  private class = getRepository(Class);

  constructor() {
    super();

    this.initializeRoutes();
  }

  private initializeRoutes() {

  }

  public getAllClasses = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const _class = await this.class.find({
      relations: ["teacher"],
      // where: { teacher: { id: 1 } }
    });

    console.log("entrou no get");

    if (_class) response.send(_class);
    else next(new NoClassException());
  };

  public postClass = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const _class: Class = _request.body.class;

    const result = await this.class.save(_class);

    response.send(result);
  };

  public putClass = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const _class: Class = _request.body.class;

    const result = await this.class.save(_class);

    response.send(result);
  };

  public deleteClass = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const _class: Class = _request.body.class;

    const result = await this.class.remove(_class);

    response.send(result);
  };

  public getAllClassByUser = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { query } = _request;
    const nome = query.nome as string;
    console.log(nome);

    const _class = await this.findByName(nome);

    if (_class) response.send(_class);
    else next(new NoClassException());
  };

  public findByName(name: string) {
    return this.class
      .createQueryBuilder("class")
      .where("class.name = :name", { name })
      .getOne();
  }
}
