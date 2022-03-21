import express from 'express';
import cors from 'cors';
import router from './router.js';
class API {
  framework;
  port;
  router;

  constructor(framework, port, router) {
    this.framework = framework();
    this.port = port;
    this.router = router;
  }

  start() {
    this.framework.listen(this.port, () => console.log(`\n > The API is listening the port ${this.port}.`));
    this.framework.use(cors()).use('/', this.router);
  }
}

const api = new API(express, process.env.API_PORT ?? 3030, router);
api.start(); 