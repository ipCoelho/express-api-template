import express from 'express';
import router from './router';
import { API } from './API';
import { data } from 'firebase/Firebase';

const api = new API(express, "http://localhost:", process.env.API_PORT ?? 3030, router);
api.start();

console.log(`data: `, data);

