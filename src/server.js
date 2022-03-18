import express from 'express';
import cors from 'cors';
import router from './router.js';

const API = express();
const port = 3030;

API.listen(3030, ()=>{console.log('TESTE')});
console.log(`\n > The API is listening the port ${port}`);

API.use('/', router);


  