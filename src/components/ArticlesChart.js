import React, {Component, PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'

class ArticlesChart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps) {
        //update chart for new articles
    }

    render() {
        return <div ref = 'chart'/>
    }

    componentWillUnmount() {
        //do some cleanup
    }
}

export default ArticlesChart