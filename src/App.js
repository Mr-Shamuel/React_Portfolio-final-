// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
// import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Intro from './Components/Intro/Intro';
// import About from './Components/About/About';

import Navbars from './Components/Navbars/Navbars';
// import Footer from './Components/Footer/Footer';
// import AllWork from './Components/AllWork/AllWork.js';
// import { useContext } from "react";
// import { ThemeContext } from './Components/Context/Context';


function App() {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  return (
    // <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }} className="con">

<Router>
 
      <Router>
        <Navbars></Navbars>


        <Switch>

          <Route exact path="/home">
            <Home />
          </Route>
          <Route  path="/">
            <Home />
          </Route>
         
          {/* <Route path="/about">
            <About />
          </Route>



          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/work">
            <AllWork />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}


        </Switch>
        {/* <Footer></Footer> */}

      </Router>
      </Router>
    // </div>
  );
}

export default App;
