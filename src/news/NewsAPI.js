import {Network, Api, HttpMethod, Request} from 'net'
import Dispatcher from "Dispatcher";
import NewsActionTypes from "./NewsActionTypes";
class NewsAPI {
    constructor(){
        this.networkAPI = new Network()
    }

    getNews(q, page) {
        this.networkAPI.call(new Request(Api.getFullUrl(Api.articleSearch), HttpMethod.get, "application/json",{
            q:q,
            page:page
        })).subscribe((data) => {
            Dispatcher.dispatch({
                type: NewsActionTypes.LOADED,
                news: data.response.docs
            });
        }, (error) => {

        })
    }
}

export default NewsAPI