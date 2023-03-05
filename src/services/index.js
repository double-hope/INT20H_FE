import { Http } from './http';
import { Auth } from './auth';
import { OAuth } from './oAuth';
import { Filter } from './filter/filterService';
import { PrivateHttp } from './privateHttp';
import { Project } from './project';

const http = new Http();
const privateHttp = new PrivateHttp();

const baseURL = 'http://localhost:8080';

const auth = new Auth({
    baseURL,
    http,
});

const oAuth = new OAuth({
    baseURL,
    http,
})

const filter = new Filter({
    baseURL, 
    http: privateHttp,
})

const project = new Project({
    baseURL,
    http: privateHttp,
})

export { http, privateHttp, auth, oAuth, filter, project };