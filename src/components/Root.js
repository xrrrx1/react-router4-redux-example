import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import App from './App'
import store from '../store/Store'
import {Provider} from 'react-redux'

function Root(props) {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}

Root.propTypes = {
};

export default Root
