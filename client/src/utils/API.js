import axios from "axios";
import { func } from "prop-types";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {

  saveEvent : function(eventData) {
  
    return axios.post("/api/events",eventData);
  },

  getEvents : function(id){
    if (id) {    
      return axios.get("/api/events/" + id);
    }
    else {    
      return  axios.get("/api/events" );
    }    
  },

  deleteEvent : function (id) {
    return axios.delete("/api/events/" + id);
  }
};
