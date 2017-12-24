import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'
import Filters from "../filters/Filters";

class Articles extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Fragment>
                <Filters/>
                <ArticleList />
                <Route path = "/articles" render = {this.getIndex} exact />
                <Route path = "/articles/:id" render = {this.getArticle} />
            </Fragment>
        )
    }

    getArticle = ({ match }) => {
        const { id } = match.params;
        return <Article id = {id} isOpen key = {id} />
    };

    getIndex = () => {
        return <h2>Please select article</h2>
    };
}

export default Articles