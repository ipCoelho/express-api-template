import cors from "cors";
import { Router } from "express";
import bodyParser from "body-parser";

export class API {
  api;
  framework;
  host: string;
  port: number;
  router: Router;

  constructor(framework, host, port, router) {
    this.api = framework();
    this.framework = framework;
    this.host = host;
    this.port = port;
    this.router = router;
  }

  start() {
    this.api.listen(this.port, () =>
      console.log(`\n > API starting at: ${this.host}${this.port}/`)
    );
    this.api
      .use(bodyParser.json({ limit: '50mb' }))
      .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
      .use(cors())
      .use("/", this.router);
  }
}
