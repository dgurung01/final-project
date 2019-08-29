import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  
  saveEvent : function(eventData) {
  
    return axios.post("/api/events",eventData);
  },

  getEvents : function(){
    console.log("get");
    return  axios.get("/api/events");
  }
};
