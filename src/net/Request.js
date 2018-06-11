class Request{
    constructor(url, method, contentType = "application/json", params = {}) {
        this.url = url;
        this.method = method;
        this.contentType = contentType;
        this.params = params;
        this.isAuth = true;
    }
}

export default Request