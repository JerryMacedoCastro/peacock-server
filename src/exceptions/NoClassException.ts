import HttpException from './HttpException';

class NoClassException extends HttpException {
    constructor() {
        super(400, `No Class were found`);
    }
}

export default NoClassException;
