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
            const currentDate = new Date('2018-08-31 13:26:00');
            let deys = moment(currentDate).diff(moment(date), 'days'),
                h5 = moment(currentDate).diff(moment(date), 'hours'),
                m12 = moment(currentDate).diff(moment(date), 'minutes')
            console.log(date, deys, h5, m12);

            return m12 < 12 ? '12 минут назад' : h5 < 5 ? '5 часов назад' : `${deys} дней назад`
        }

        render() {
            return <WrappedComponent date={this.handleChangeDate(this.state.data)}/>
        }
    }
}

export default DateTimePretty