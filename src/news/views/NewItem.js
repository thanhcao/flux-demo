import React, {Component} from 'react';
import Dispatcher from "Dispatcher";
import "./NewItem.scss"
import ModalActionTypes from "modals/ModalActionTypes";

export default class NewItem extends Component {
    constructor(props) {
        super(props)
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

    clickItem(model){
        Dispatcher.dispatch({
            type: ModalActionTypes.SHOW_MODAL,
            model: model
        });
    }

    render(){
        var {model} = this.props
        var thumbnails = model.multimedia.filter(item => item.subtype == "mediumThreeByTwo210")
        return (
            <li key={model._id} className={"newItem"}>
                <div className={"story story1"}>
                    <div className={"dateline"}>
                        {model.pub_date}
                    </div>
                </div>
                <div className={"story story2"}>
                    <div className={"headline"} onClick={(e) => this.clickItem(model)}>
                        {model.headline.main}
                    </div>
                    <div className={"description"} onClick={(e) => this.clickItem(model)}>
                        {model.snippet}
                    </div>
                    <div className={"byline"}>
                        {model.byline && model.byline.original}
                    </div>
                    <div className={"source"}>
                        <a href={model.web_url} target="_blank">Source</a>
                    </div>
                </div>
                <div className={"story story3 wide-thumb"}>
                    {thumbnails.length > 0 &&
                        <img role="presentation" src={"https://static01.nyt.com/"+thumbnails[0].url}/>
                    }
                </div>
            </li>
        )
    }
}