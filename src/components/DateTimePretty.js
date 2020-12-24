import React from 'react'
import moment from 'moment'

function DateTimePretty(WrappedComponent, data) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {data: data}
            this.handleChangeDate = this.handleChangeDate.bind(this)
        }

        handleChangeDate(date) {
            const currentDate = new Date('2018-03-03 13:32:00');
            let deys = moment(currentDate).diff(moment(date), 'days'),
                min = moment(currentDate).diff(moment(date), 'minutes')
            console.log(date, deys, min);

            return min < 60 ? '12 минут назад' : 60<min && deys===0 ? '5 часов назад' : `${deys} дней назад`
        }

        render() {
            return <WrappedComponent date={this.handleChangeDate(this.state.data)}/>
        }
    }
}

export default DateTimePretty