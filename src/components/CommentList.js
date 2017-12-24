import React, {Component, PureComponent, Fragment} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import Comment from "./Comment";
import toggleOpen from "../decorators/toggleOpen";
import CommentForm from "./commentForm/CommentForm";
import { connect } from 'react-redux'
import {loadArticleComments} from "../ActionCreators/actionCreator";
import Loader from "./Loader";

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const text = isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {getBody({article, isOpen})}
            </div>
        )
    }
}

function getBody({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
    if (!isOpen) return null;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;

    if (!comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm articleId = {id} />
        </div>
    );

    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

export default connect(null, { loadArticleComments })(toggleOpen(CommentList))