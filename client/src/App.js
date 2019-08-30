import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Search from "./pages/Todo";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Event from "./components/createEvent/createEvent"


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/event" component={Event} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
