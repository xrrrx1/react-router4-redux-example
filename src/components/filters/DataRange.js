import React, {Component, PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {render, findDOMNode} from 'react-dom'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux'
import {changeDateRange} from "../../ActionCreators/actionCreator";

// class DateRange extends Component {
//     state = {
//         from: null,
//         to: null
//     };
//
//     handleDayClick = (day) => {
//         this.setState(DateUtils.addDayToRange(day, this.state))
//     };
//
//     render() {
//         const { from, to } = this.state;
//         const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
//         return (
//             <div className="date-range">
//                 <DayPicker
//                     ref="daypicker"
//                     selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
//                     onDayClick={ this.handleDayClick }
//                 />
//                 {selectedRange}
//             </div>
//         );
//     }
//
// }
//
// export default DateRange

class DateRange extends Component {

    handleDayClick = (day) => {
        const { changeDateRange, range } = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range))
        // this.setState(range);
    };

    // handleResetClick = () => {
    //     const { from, to } = this.props.range;
    //     this.setState({
    //         from: null,
    //         to: null
    //     });
    // };

    render() {
        const { from, to } = this.props.range;
        const modifiers = { start: from, end: to };
        const selectedRange = from && to && `From ${from.toLocaleDateString()} to ${to.toLocaleDateString()} `;
        return (
            <div className="datesRange">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {selectedRange}
                    {/*{from && to && (*/}
                        {/*<button className="link" onClick={this.handleResetClick}>*/}
                            {/*Reset*/}
                        {/*</button>)}*/}
                </p>
                <DayPicker
                    ref={this.setDayPicker}
                    className="Selectable"
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }

    setDayPicker = ref => {
    //    console.log(findDOMNode(ref))
    }
}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange })(DateRange)
