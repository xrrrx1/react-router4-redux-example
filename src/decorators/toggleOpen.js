import React, {Component as ReactComponent, PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (e) => {
        e && e.preventDefault && e.preventDefault();
        //console.log('---', e.nativeEvent);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}