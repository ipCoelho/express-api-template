import cors from "cors";
import fileUpload from "express-fileupload";


export class API {
  api;
  framework;
  host;
  port;
  router;

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
      .use(this.framework.json())
      .use(this.framework.urlencoded({ extended: true }))
      .use(cors())
      .use(fileUpload({
        useTempFiles : true,
        tempFileDir : './src/temp/',
      }))
      .use("/", this.router);
  }
}
