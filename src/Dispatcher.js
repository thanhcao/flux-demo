import NewsStore from "news/NewsStore";

class Dispatcher{
    constructor(){
        this.stores = []
    }
    addStore(store){
        this.stores.push(store)
    }
    dispatch(action){
        this.stores.forEach(store => {
            store.reduce(action)
        })
    }
}

export default new Dispatcher()