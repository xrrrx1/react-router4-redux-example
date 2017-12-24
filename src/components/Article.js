import React, {Component, PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {render, findDOMNode} from 'react-dom'
import CommentList from "./CommentList"
import { CSSTransitionGroup } from 'react-transition-group'
import {deleteArticle, loadArticle} from "../ActionCreators/actionCreator";
import Loader from "./Loader";
import pure from 'recompose/pure';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string,
            id: PropTypes.string,
            text: PropTypes.string
        }),
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool
    };

    state = {
        areCommentsOpen: false
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    componentDidMount() {
    //    console.log('mounted')
        const {loadArticle, article, id} = this.props;
        if (!article  || (!article.text && !article.loading)) loadArticle(id)
    }

    componentWillMount() {
    //    console.log('mounting')
    }

    render() {
        const {article, isOpen} = this.props;
        if (!article) return null;
        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={this.handleDelete}>Delete me</button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {500}
                    component = 'div'
                >
                {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
        //console.log('deleting article')
    };

    setContainerRef = ref => {
    //    console.log(ref)
    };

    getBody() {
        //console.log('update');
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        if (article.loading) return <Loader/>;
        return (
            <section>
                {article.text}
                <CommentList article = {article} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
            </section>
        )
    }

    setCommentsRef = ref => {
    //    console.log(findDOMNode(ref))
        this.comments = ref
    }
}


export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), { deleteArticle, loadArticle })(pure(Article))