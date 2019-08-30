import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Search from "./pages/Todo";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Event from "./components/createEvent/createEvent";
import Todo from "./pages/Todo";


class App extends React.Component{

   LoginContainer = () => {

    return(
      <div className="container">
      {/* <Route exact path="/" render={() => <Redirect to="/Home" />} /> */}
      <Route exact path="/" component={Home} />
    </div>
    )

    }
  
  DefaultContainer = () => {
    return(
      <div>
      {/* <Header toggleAlert={this.toggleAlert} /> */}
      <div className="container">
        <Navbar />
        <Route exact path="/about" component={About} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/todo" component={Todo} />

        {/* {this.state.isAlertOpen ? <Alert /> : null} */}
      </div>
      </div>
    )  
  }

  render (){
    return(
      <Router>
      <Switch>
      <div className="App">
        <Route exact path="/" component={Home}/>      
        <Route exact path = {"/(calendar)" || "/(about)"} component={this.DefaultContainer}/>
        <Route exact path = "/(todo)" component={this.DefaultContainer}/>
    
      </div>
      </Switch>
      </Router>
    )
  }


}


export default App;
