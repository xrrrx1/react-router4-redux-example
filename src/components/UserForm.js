import React, {Component, PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {render, findDOMNode} from 'react-dom'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        username: ''
    };

    render() {

        return (
            <div>
                Name: <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
            </div>
        )
    }

    handleUserChange = (e) => {
        if (e.target.value.length > 10) return;

        this.setState({
            username: e.target.value
        })
    }
}

export default UserForm