import React, {Component, PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import {changeSelection} from "../../ActionCreators/actionCreator";
import {mapToArr} from "../../helpers";

class SelectFilter extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value));

    render() {
        const { articles, selected } = this.props;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: mapToArr(state.articles.entities)
}), { changeSelection })(SelectFilter)