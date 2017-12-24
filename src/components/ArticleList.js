import React, {Component, PureComponent, Fragment} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtrateArticlesSelector} from "../selectors/articlesSelector";
import {loadAllArticles} from "../ActionCreators/actionCreator";
import Loader from "./Loader";
import {NavLink} from 'react-router-dom'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        // from accordion
        toggleOpenItem: PropTypes.func,
        openItemId: PropTypes.string
    };

    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props;
        if (!loaded && !loading) loadAllArticles();
    }

    render() {
        //console.log('update articles list');
        const { articles, loading } = this.props;
        if (loading) return <Loader/>;
        const articleElements = articles.map((article) => <li key={article.id}>
            <NavLink to = {`/articles/${article.id}`} activeStyle = {{color: 'red'}}>
                {article.title}
            </NavLink>
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: filtrateArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
}), {loadAllArticles})(ArticleList)