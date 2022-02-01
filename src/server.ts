import express from 'express';
import cors from 'cors';

const API = express();

API.listen(process.env['API_PORT']);
console.log("\nThe API is listening the port "+process.env['API_PORT']);


API
    .use(cors())
