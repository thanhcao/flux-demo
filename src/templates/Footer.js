import React, {Component} from 'react'
import "./Footer.scss"

export default class Footer extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className={"footer"}>
                <div>© 2018 The New York Times Company</div>
            </div>
        )
    }
}