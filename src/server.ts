import express from 'express';
import router from './router';
import { Seeds } from './seeds/Seeds';
import { API } from './API';
import { data } from './seeds/data';

const api = new API(express, "http://localhost:", process.env.API_PORT ?? 3030, router);
const seeds = new Seeds();

seeds.tableEstado(data.estado);
seeds.tableLogin(data.login);
seeds.tableOng(data.ong);

api.start();