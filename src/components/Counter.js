import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from "../ActionCreators/actionCreator";

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        const {counter} = this.props;

        return (
            <Fragment>
                <h2>{counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </Fragment>
        )
    }

    handleIncrement = () => {
        const {increment} = this.props;

        increment()
    }
}

export default connect((state) => ({
    counter: state.count
}), { increment })(Counter);
