import React, {Component, PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'
import Articles from "./routes/Articles";
import ArticlesChart from "./ArticlesChart";
import 'react-select/dist/react-select.css'
import Counter from "./Counter";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import MainPage from './routes/MainPage'

export default class App extends Component {
    static propTypes = {
    };

    render() {
        return (
            <Router>
                <Fragment>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle={{color: 'red'}} to={'/counter'}>Counter</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to={'/articles'}>Articles</NavLink></div>
                    </div>
                    <Switch>
                        <Route path = "/counter" component = {Counter} />
                        <Route path = "/articles" component = {Articles} />
                        <Route path = "/" component = {MainPage}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

