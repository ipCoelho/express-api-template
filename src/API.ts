import cors from "cors";
import { Router } from "express";
import bodyParser from "body-parser";
import { auth } from "express-openid-connect";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'b0fa47e535114b7488e19076b5c0384033479d633c3d731fb70ee2be83dc1eb1',
  baseURL: 'http://localhost:3131',
  clientID: 'VxwZHlRYfLHuFivEJm5gCV7RCFP3TNKm',
  issuerBaseURL: 'https://dev-7g-95hw4.us.auth0.com'
};

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
      console.log(`\n > API listening at: ${this.host}${this.port}/`)
    );
    this.api
      .use(bodyParser.json({ limit: '50mb' }))
      .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
      .use(cors())
      .use(auth(config))
      .use("/", this.router);
  }
}
