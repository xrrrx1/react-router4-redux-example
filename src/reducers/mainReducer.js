import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import articles from './articlesReducer'
import filters from './filtersReducer'
import comments from './commentsReducer'


export default combineReducers ({
    count: counterReducer,
    articles, filters, comments
});

