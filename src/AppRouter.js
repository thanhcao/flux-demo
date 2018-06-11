// Libs
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import React, {Component} from 'react'
import HomePage from 'pages/HomePage'
import DetailPage from 'pages/DetailPage'

import TemplateApp from 'layouts/TemplateApp'

// Routes
export default class AppRouter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="fullHeight">
                <Router>
                    <div className="fullHeight">
                        <Switch>
                            <Route path="/home" render={(props) => (
                                <TemplateApp>
                                    <HomePage {...props}>
                                    </HomePage>
                                </TemplateApp>
                            )}/>

                            <Route path="/" exact render={(props) => (
                                <TemplateApp>
                                    <HomePage {...props}>
                                    </HomePage>
                                </TemplateApp>
                            )}/>

                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
