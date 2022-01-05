import * as bodyParser from "body-parser";
// import cookieParser from 'cookie-parser';
import express from "express";
import { Connection } from "typeorm";
import Controller from "./interfaces/controller.interface";
import errorMiddleware from "./middleware/error.middleware";
import routes from "./routes";

class App {
  public app: express.Application;

  constructor(manager: Connection) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeErrorHandling();
    this.initializeRouter(manager);
  }

  public listen(): void {
    this.app.listen(process.env.PORT || 3333, () => {
      console.log(`App listening on the port ${process.env.PORT || 3333}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    // this.app.use(cookieParser());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private initializeRouter(manager: Connection) {
    this.app.use("/", routes);
  }
}

export default App;
