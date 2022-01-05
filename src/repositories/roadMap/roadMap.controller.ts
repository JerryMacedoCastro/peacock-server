import {
  Request,
  Response,
  Router,
  NextFunction,
  RequestHandler,
} from "express";
import { EntityRepository, Repository, getRepository, createConnection, Connection } from "typeorm";
import RoadMap from "./roadMap.entity";
import TeachingPlatform from "../teachingPlatform/teachingPlatform.entity";
import TeachingStage from "../teachingStage/teachingStage.entity";
import TeachingStrategy from "../teachingStrategy/teachingStrategy.entity";
import Tools from "../tools/tools.entity";
import IController from "../../interfaces/controller.interface";
import NoRoadMapException from "../../exceptions/NoRoadMapException";
import config from "../../../ormconfig";

@EntityRepository(RoadMap)
export class RoadMapController
  extends Repository<RoadMap>
  implements IController {
  public path = "/roadMap";
  public router = Router();
  public static roadMap: Repository<RoadMap>;

  constructor() {
    super();

    this.initializeRoutes();
  }

  private async initializeRoutes() {
    await createConnection(config);
    RoadMapController.roadMap = getRepository(RoadMap);
  }

  public getAllRoadMaps = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const roadMap = await RoadMapController.roadMap.find({
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

  public postRoadMap = async (
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

    const result = await RoadMapController.roadMap.save(roadMap);

    response.send(result);
  };

  public putRoadMap = async (
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

    const result = await RoadMapController.roadMap.save(roadMap);

    response.send(result);
  };

  public deleteRoadMap = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const roadMap: RoadMap = _request.body.roadMap;

    const result = await RoadMapController.roadMap.remove(roadMap);

    response.send(result);
  };

  public getRoadMapById = async (
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
    return RoadMapController.roadMap
      .createQueryBuilder("roadMap")
      .where("roadMap.teacher = :id", { id })
      .getOne();
  }
}
