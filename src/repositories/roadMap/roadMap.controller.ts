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
export class RoadMapController {

    public getAllRoadMaps = async (
        _request: Request,
        response: Response,
        next: NextFunction
    ) => {
        try {
            const roadMapRepository = getRepository(RoadMap);
            const roadMap = await roadMapRepository.find({
                relations: [
                    "TeachingPlatform",
                    "TeachingStage",
                    "TeachingStrategy",
                    "Tools",
                    "Teacher",
                ],
            });
            if (roadMap) return response.send(roadMap);
            else return next(new NoRoadMapException());
        } catch (error) {
            return response.status(400).send(error);
        }
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
        const roadMapRepository = getRepository(RoadMap);

        let roadMap: RoadMap = _request.body.roadMap;

        roadMap.teachingPlatform = await repTeachingPlatform.save(
            roadMap.teachingPlatform
        );
        roadMap.teachingStage = await repTeachingStage.save(roadMap.teachingStage);
        roadMap.teachingStrategy = await repTeachingStrategy.save(
            roadMap.teachingStrategy
        );
        roadMap.tools = await repTools.save(roadMap.tools);


        const result = await roadMapRepository.save(roadMap);

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
        const roadMapRepository = getRepository(RoadMap);

        let roadMap: RoadMap = _request.body.roadMap;

        roadMap.teachingPlatform = await repTeachingPlatform.save(
            roadMap.teachingPlatform
        );
        roadMap.teachingStage = await repTeachingStage.save(roadMap.teachingStage);
        roadMap.teachingStrategy = await repTeachingStrategy.save(
            roadMap.teachingStrategy
        );
        roadMap.tools = await repTools.save(roadMap.tools);

        const result = await roadMapRepository.save(roadMap);

        response.send(result);
    };

    public deleteRoadMap = async (
        _request: Request,
        response: Response,
        next: NextFunction
    ) => {
        const roadMap: RoadMap = _request.body.roadMap;
        const roadMapRepository = getRepository(RoadMap);

        const result = await roadMapRepository.remove(roadMap);

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
        const roadMapRepository = getRepository(RoadMap);
        return roadMapRepository
            .createQueryBuilder("roadMap")
            .where("roadMap.teacher = :id", { id })
            .getOne();
    }
}