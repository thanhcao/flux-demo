import NewsAPI from "./NewsAPI"
import NewsActionTypes from "./NewsActionTypes"
import {observable, action} from 'mobx'

export default class NewsStore{
    @observable news
    constructor(){
        this.news = []
        this.page = 0
        this.api = new NewsAPI()
    }
    getState(){
        return {
            news: this.news
        }
    }

    @action reduce(action){
        switch (action.type) {
            case NewsActionTypes.LOAD_NEWS:
                this.api.getNews("singapore",this.page)
                break
            case NewsActionTypes.LOADED:
                this.news = this.news.concat(action.news)
                break
            case NewsActionTypes.LOAD_MORE_NEWS:
                this.page = this.page + 1
                this.api.getNews("singapore",this.page)
                break
        }
    }
}