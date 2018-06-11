import ModalActionTypes from "./ModalActionTypes"
import {observable, action} from 'mobx'

export default class ModalStore{
    @observable isShowModal
    @observable model
    constructor(){
        this.isShowModal = false
        this.model = null
    }
    getState(){
        return {
            isShowModal: this.isShowModal,
            model: this.model
        }
    }
    @action reduce(action){
        switch (action.type) {
            case ModalActionTypes.SHOW_MODAL:
                this.isShowModal = true
                this.model = action.model
                break
            case ModalActionTypes.HIDE_MODAL:
                this.isShowModal = false
                this.model = null
                break
        }
    }
}