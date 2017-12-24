import React, {Component, PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'
import SelectFilter from "./Select";
import DateRange from "./DataRange";

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles} />
                <DateRange />
            </div>
        )
    }
}

export default Filters