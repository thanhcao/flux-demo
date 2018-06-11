const Api = {
    domain: 'https://api.nytimes.com/svc/search/v2/',
    articleSearch:'articlesearch.json',
    getFullUrl: function (api) {
        return this.domain + api
    }
}

export default Api