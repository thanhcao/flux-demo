import axios from "axios/index"
import Rx from "rxjs"
import HttpMethod from "./httpMethod"

class Network{
    constructor() {
    }

    call(request) {
        var params = request.params
        request.params["api-key"] = "b6fcffc9888d47ecb1af91d4cdf24890"
        if(request.contentType === "application/x-www-form-urlencoded"){
            params = QueryString.stringify(request.params)
        }

        var finalRequest = {
            method: request.method,
            url: request.url
        }

        if(request.method === HttpMethod.get){
            finalRequest["params"] = params
        }else{
            finalRequest["data"] = params
        }

        return Rx.Observable.create(function(observer) {
            axios.request(finalRequest).then(function (response) {
                const {data} = response
                if(!data.success){
                    const numberOfErrors = data.errors?data.errors.length:0
                    for (var index = 0; index < numberOfErrors; index++) {
                        if(data.errors[index] == ErrorCode.InvalidToken){
                            userStore.user.reset()
                            window.location.href = "/login";
                            return
                        }
                    }
                }
                observer.next(response.data)
                observer.complete()
            }).catch(function (error) {
                observer.error(error)
            })
        })
    }
}

export default Network
