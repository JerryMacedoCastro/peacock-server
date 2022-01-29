import {
  Request,
  Response,
  Router,
  NextFunction,
  RequestHandler,
} from "express";
import { EntityRepository, Repository, getRepository } from "typeorm";
import RoadMap from "./roadMap.entity";
import TeachingPlatform from "../teachingPlatform/teachingPlatform.entity";
import TeachingStage from "../teachingStage/teachingStage.entity";
import TeachingStrategy from "../teachingStrategy/teachingStrategy.entity";
import Tools from "../tools/tools.entity";
import IController from "../../interfaces/controller.interface";
import NoRoadMapException from "../../exceptions/NoRoadMapException";

@EntityRepository(RoadMap)
export class RoadMapController
  extends Repository<RoadMap>
  implements IController
{
  public path = "/roadMap";
  public router = Router();
  private roadMap = getRepository(RoadMap);

  constructor() {
    super();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      this.path,
      // {} as RequestHandler,
      this.getAllRoadMaps
    );

    this.router.post(
      this.path,
      // {} as RequestHandler,
      this.postRoadMap
    );

    this.router.put(
      this.path,
      // {} as RequestHandler,
      this.putRoadMap
    );

    this.router.delete(
      this.path,
      // {} as RequestHandler,
      this.deleteRoadMap
    );

    this.router.get(
      `${this.path}/byId`,
      // {} as RequestHandler,
      this.getRoadMapById
    );
  }

  private getAllRoadMaps = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const roadMap = await this.roadMap.find({
      relations: [
        "teachingPlatform",
        "teachingStage",
        "teachingStrategy",
        "tools",
        "teacher",
      ],
    });
    if (roadMap) response.send(roadMap);
    else next(new NoRoadMapException());
  };

  private postRoadMap = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const repTeachingPlatform = getRepository(TeachingPlatform);
    const repTeachingStage = getRepository(TeachingStage);
    const repTeachingStrategy = getRepository(TeachingStrategy);
    const repTools = getRepository(Tools);

    let roadMap: RoadMap = _request.body.roadMap;

    roadMap.teachingPlatform = await repTeachingPlatform.save(
      roadMap.teachingPlatform
    );
    roadMap.teachingStage = await repTeachingStage.save(roadMap.teachingStage);
    roadMap.teachingStrategy = await repTeachingStrategy.save(
      roadMap.teachingStrategy
    );
    roadMap.tools = await repTools.save(roadMap.tools);

    const result = await this.roadMap.save(roadMap);

    response.send(result);
  };

  private putRoadMap = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const repTeachingPlatform = getRepository(TeachingPlatform);
    const repTeachingStage = getRepository(TeachingStage);
    const repTeachingStrategy = getRepository(TeachingStrategy);
    const repTools = getRepository(Tools);

    let roadMap: RoadMap = _request.body.roadMap;

    roadMap.teachingPlatform = await repTeachingPlatform.save(
      roadMap.teachingPlatform
    );
    roadMap.teachingStage = await repTeachingStage.save(roadMap.teachingStage);
    roadMap.teachingStrategy = await repTeachingStrategy.save(
      roadMap.teachingStrategy
    );
    roadMap.tools = await repTools.save(roadMap.tools);

    const result = await this.roadMap.save(roadMap);

    response.send(result);
  };

  private deleteRoadMap = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const roadMap: RoadMap = _request.body.roadMap;

    const result = await this.roadMap.remove(roadMap);

    response.send(result);
  };

  private getRoadMapById = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { query } = _request;
    const id = BigInt(query.id as string);

    const teacher = await this.findByIdTeacher(id);

    if (teacher) response.send(teacher);
    else next(new NoRoadMapException());
  };

  findByIdTeacher(id: bigint) {
    return this.roadMap
      .createQueryBuilder("roadMap")
      .where("roadMap.teacher = :id", { id })
      .getOne();
  }
}
