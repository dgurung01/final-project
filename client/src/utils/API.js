import axios from "axios";

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
    
  }
};
