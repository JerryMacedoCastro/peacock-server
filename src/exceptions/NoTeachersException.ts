import HttpException from './HttpException';

class NoTeacherException extends HttpException {
  constructor() {
    super(400, `No teacher were found`);
  }
}

export default NoTeacherException;
