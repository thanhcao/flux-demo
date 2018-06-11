import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap'
import "./HomePage.scss"
import Dispatcher from "Dispatcher";
import NewsActionTypes from "news/NewsActionTypes";
import ModalActionTypes from "modals/ModalActionTypes";
import NewsStore from "news/NewsStore";
import ModalStore from "modals/ModalStore";
import {observer} from "mobx-react"
import NewItem from "news/views/NewItem";

@observer
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.newsStore = new NewsStore()
        this.modalStore = new ModalStore()
        Dispatcher.addStore(this.newsStore)
        Dispatcher.addStore(this.modalStore)
        Dispatcher.dispatch({
            type: NewsActionTypes.LOAD_NEWS
        });
    }

    handleCloseModalClick(){
        Dispatcher.dispatch({
            type: ModalActionTypes.HIDE_MODAL
        });
    }

    clickMore(){
        Dispatcher.dispatch({
            type: NewsActionTypes.LOAD_MORE_NEWS
        });
    }


    render(){
        var {news} = this.newsStore.getState()
        var {isShowModal, model} = this.modalStore.getState()
        news = news.filter(item => item.document_type == "article")
        return (
            <div id={"homePage"}>
                <ul>
                    {news.map((item, i) => {
                        return <NewItem key={i} model={item}></NewItem>
                    })}
                </ul>
                <div className={"control"}>
                    <Button className={"more"} onClick={(e) => this.clickMore()}>More</Button>
                </div>
                <Modal className={"modal"} show={isShowModal} bsSize="large"
                       onHide={() => {this.handleCloseModalClick()}}>
                    <Modal.Header closeButton>
                        {model &&
                            <Modal.Title>{model.headline.main}</Modal.Title>
                        }
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"content"}>
                            {model &&
                                <iframe src={model.web_url}></iframe>
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}