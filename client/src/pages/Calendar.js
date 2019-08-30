import React from "react";
import {format, addMonths, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameDay, isSameMonth, parse, addDays} from "date-fns";


// import events from "../events.json";
import PTags from "../components/pTags/PTags.js";
import Modal from "../components/Modal/Modal";
import CreateEvent from "../components/createEvent/createEvent.js";
import API from "../utils/API";

import "./css/calendar.css";
// import "../components/Modal/Modal.css"


class Calendar extends React.Component {
  
  state = {
        events : [],
        currentMonth: new Date(),
        selectedDate: new Date(),
        show : false
        
  };
  

  openModalHandler = () => {
    this.setState({
        show: true
    });
  }

  closeModalHandler = () => {
    this.setState({
        show: false
    });
  }

  componentWillMount = () => {
    this.getEvents();
    
  }

  
  renderModal(){
    return (
      <div className="newevent">      
        <Modal
            className="modal"
            show={this.state.show}
            close={this.closeModalHandler}>
                <CreateEvent
                  close = {this.closeModalHandler}
                />
        </Modal>
      </div>
    );
  }


  renderHeader() {
    const dateFormat = "MMMM yyyy";
    
    return (
       

        <div className="header row flex-middle">

          <button className="col-2 btn btn-lg btn-link" onClick={this.openModalHandler}>New Event</button>

          <div className="col col-start">
            <div className="icon" onClick={this.prevMonth}>
              chevron_left
            </div>
          </div>
          <div className="col col-center">
            <span>
              {format(this.state.currentMonth, dateFormat)}
            </span>
          </div>
          <div className="col col-end" onClick={this.nextMonth}>
            <div className="icon">chevron_right</div>
          </div>
 
        </div>
       
      );
  }


  renderDays() {
    const dateFormat = "iiii";
    const days = [];
    let startDate = startOfWeek(this.state.currentMonth);
    
   
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }


  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const eventList = this.state.events;

    
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";


    while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        
       
        const cloneDay = day;
        
        const daysEvents = eventList.filter((eventOne) => (eventOne.startDate).split("T")[0] === format(cloneDay,"yyyy-MM-dd"));
                

        days.push(
        <div
            className={`col cell ${
            !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(parse(cloneDay,'MM/dd/yyyy',
            new Date()))}
        >
           
           <div className = "eventDiv">
                {daysEvents.map(today => (                  
                   <PTags
                   event = {today}/>

                ))}
           </div>
           
            
            <span className="number">{formattedDate}</span>            
            <span className="bg">{formattedDate}</span>
           
        </div>
        );
        day = addDays(day, 1);
    }
    rows.push(
        <div className="row" key={day}>
        {days}
        </div>
    );
    days = [];
    }

    return <div className="body">{rows}</div>;
  }


  onDateClick = day => {

    this.setState({
        selectedDate: day
      });
    
  }



  nextMonth = () => {
    this.setState({
        currentMonth: addMonths(this.state.currentMonth, 1)
      });
  }

  prevMonth = () => {
    this.setState({
        currentMonth: subMonths(this.state.currentMonth, 1)
      });
  }

  getEvents = () => {
    API.getEvents()
    .then(res =>{     
      this.setState({
        events: res.data
      });     
    })
    .catch(() =>
      this.setState({
        Events: []
      })
    );
};

  
  render() {
    return (
      <div>
        { this.state.show ? this.renderModal():""}

        <div className=" container calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
      </div>
      </div>
        
    );
  }
}

export default Calendar;