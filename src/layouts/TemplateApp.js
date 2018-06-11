import React,{Component} from 'react'
import Header from 'templates/Header'
import Footer from 'templates/Footer'

export default class TemplateApp extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="templateApp">
                <section className={"app-header"}><Header/></section>
                <section className={"app-body avoidHeader"}>{ this.props.children }</section>
                <section className="app-footer"><Footer/></section>
            </div>
        )
    }
}