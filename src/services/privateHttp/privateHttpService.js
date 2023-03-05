import { HttpMethodEnum, HttpHeaderEnum } from 'common';

export let statusCode;
let okStatus;

class PrivateHttp {
    load(url, options){
        const { method = HttpMethodEnum.GET, payload = null, contentType, credentials, authorization } = options;
        const headers = this._getHeaders({
            contentType,
            credentials,
            authorization,
        });

        return fetch(url, {
            method,
            headers,
            body: payload,
        })
            .then(this._checkStatus)
            .then(this._parseJSON)
            .then(this._sendMessage)
            .catch(this._throwError);
    }

    _getHeaders({ contentType, credentials, authorization }) {
        const headers = new Headers();

        if (contentType) headers.append(HttpHeaderEnum.CONTENT_TYPE, contentType);
        
        if(credentials) headers.append(HttpHeaderEnum.CREDENTIALS, credentials);

        if(authorization) headers.append(HttpHeaderEnum.AUTHORIZATION, `Bearer ${authorization}`);

        return headers;
    }

    _checkStatus(response) {
        const { ok, status } = response;

        statusCode = status;
        okStatus = ok;

        if(status === 401){
            console.log('log-out');
        }

        return response;
    }

    _parseJSON(response) {
        return response.json();
    }

    _sendMessage(response) {
        const { message } = response;

        if(!okStatus) throw new Error(message)
        else return response;
    }

    _throwError(err) {
        throw err;
    }
}

export { PrivateHttp };