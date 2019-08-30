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


<<<<<<< HEAD
function App() {

  return (
    <Router>
=======
class App extends React.Component{

   LoginContainer = () => {

    return(
      <div className="container">
      {/* <Route exact path="/" render={() => <Redirect to="/Home" />} /> */}
      <Route exact path="/" component={About} />
    </div>
    )

    }
  
  DefaultContainer = () => {
    return(
>>>>>>> 23ada20be58ebf80693f49d2207d9b28fa7a482a
      <div>
      {/* <Header toggleAlert={this.toggleAlert} /> */}
      <div className="container">
        <Navbar />
<<<<<<< HEAD
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/event" component={Event} />
        </Wrapper>
        <Footer />
=======
        <Route exact path="/about" component={About} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/todo" component={Todo} />

        {/* {this.state.isAlertOpen ? <Alert /> : null} */}
      </div>
>>>>>>> 23ada20be58ebf80693f49d2207d9b28fa7a482a
      </div>
    )  
  }

  render (){
    return(
      <Router>
      <Switch>
      <div className="App">
        <Route exact path="/" component={this.LoginContainer}/>
        <Route component={this.DefaultContainer}/>
        {/* <Route exact path = "/(about)" component={this.DefaultContainer}/> */}
    
      </div>
      </Switch>
      </Router>
    )
  }


}

// function App() {
 
//   return (
    
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/calendar" component={Calendar} />
//           <Route exact path="/search" component={Search} />
//           <Route exact path="/event" component={Event} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

export default App;
