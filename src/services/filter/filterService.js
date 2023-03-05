import { ApiPath, HttpMethodEnum } from 'common';

class Filter {
    constructor({baseURL, http}) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.FILTER;
    }

    technologies(path, extra) {
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json',
            authorization: extra?.authorization,
        })
    }

    languages(path, extra){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json',
            authorization: extra?.authorization,
        })
    }

    workloads(path, extra){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json',
            authorization: extra?.authorization,
        })
    }

    members(path, extra){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json',
            authorization: extra?.authorization,
        })
    }

    invite(path, extra){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            contentType: 'application/json',
            authorization: extra?.authorization,
        })
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }

    _getQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
          keyValuePairs.push(key + '=' + obj[key]);
        }
        return keyValuePairs.join('&');
    }
}

export { Filter };