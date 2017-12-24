import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'

class Loader extends Component {
    static propTypes = {};

    render() {

        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
}

export default Loader