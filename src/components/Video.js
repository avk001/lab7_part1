import React from 'react'
import DateTime from './DateTime'
import DateTimePretty from './DateTimePretty'

function Video(props) {

    const  DateView = DateTimePretty(DateTime, props.date);

    return ( 
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateView />
        </div>
    )
}


export default Video