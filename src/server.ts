import express from 'express';
import cors from 'cors';
import router from './router';
class API {
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
    this.api.listen(this.port, () => console.log(`\n > API listening at: ${this.host}${this.port}/`));
    this.api
      .use(this.framework.json())
      .use(cors())
      .use('/', this.router);
  }
}

const api = new API(express, "http://localhost:", process.env.API_PORT ?? 3030, router);
api.start(); 