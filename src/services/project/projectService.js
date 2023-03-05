import { ApiPath, HttpMethodEnum } from 'common';

class Project {
    constructor({baseURL, http}) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.PROJECT;
    }

    create(path, extra) {
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(extra.body),
            contentType: 'application/json',
            authorization: extra?.authorization,
        })
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }
}

export { Project };