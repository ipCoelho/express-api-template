import cors from "cors";
import { Router } from "express";
import bodyParser from "body-parser";
import { auth } from "express-openid-connect";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

console.log(`config: `, config);

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
