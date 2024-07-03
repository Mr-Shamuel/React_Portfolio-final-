import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useContext, Suspense, lazy } from "react";
import { ThemeContext } from './Components/Context/Context';
import Navbars from './Components/Navbars/Navbars';
import Footer from './Components/Footer/Footer';

// Lazy load components
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const AllWork = lazy(() => import('./Components/AllWork/AllWork'));

// Loading Component
const Loading = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }} className="con">
      <Router>
        <Navbars />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={AllWork} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
