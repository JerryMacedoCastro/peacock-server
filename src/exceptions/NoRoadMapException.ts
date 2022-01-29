import HttpException from './HttpException';

class NoRoadMapException extends HttpException {
    constructor() {
        super(400, `No RoadMap were found`);
    }
}

export default NoRoadMapException;
