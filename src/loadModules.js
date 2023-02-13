import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import path from 'path';
import express from 'express';

export const loadModule = (server) => {

    server.use(bodyParser.json({ limit: '5mb' }));
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(methodOverride());
    server.use(cors({ origin: true, credentials: true }));

    server.use(express.static(path.join(__dirname, '../public')));
    return server;
}