import React from "react";
import Moment from "moment";

import "./Eventmodal.css";

class EventModal extends React.Component{

    changeDate = () => {
    
        const startDate = new Date(Date.parse(this.props.event.startDate));
        const endDate =  new Date(Date.parse(this.props.event.endDate));
        const printEndDate = Moment(startDate).isSame(endDate, 'day');  

        // const eventDate = new Date(Date.parse(startDate));

        console.log(printEndDate);
        const formatedDate = `${Moment(startDate).format("dddd, ll")} \n
                                From ${Moment(startDate).format("LT")} To ${printEndDate ?  "" : Moment(endDate).format("dddd ll")} ${Moment(endDate).format("LT")}`;
        console.log(formatedDate);
        // this.setState({dateTag : formatedDate});
        return formatedDate;
    }

    render (){
        const event = this.props.event;
        const dateTag =  this.changeDate();

      
        return(
            <div>
                <p className = "Heading">{event.eventName}</p>
                <div className = "dateTag">{dateTag.split("\n").map((i,key) => {
                    return <p key={key}>{i}</p>;
                })}</div>
                <p>{event.startTime}</p>
                <p> Alert {event.remindOpt_id}</p>
                <button>Delete Event</button>
            </div>
        );
    }
}

export default EventModal;