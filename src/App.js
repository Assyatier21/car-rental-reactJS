import MyNavbar from "./components/MyNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import OurServices from "./pages/OurServices";
import Register from "./pages/Register";
import Testimonial from "./pages/Testimonial";
import WhyUs from "./pages/WhyUs";
import MyFooter from "./components/MyFooter";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/our-services">
              <OurServices />
            </Route>
            <Route exact path="/why-us">
              <WhyUs />
            </Route>
            <Route exact path="/testimonial">
              <Testimonial />
            </Route>
            <Route exact path="/faq">
              <FAQ />
            </Route>
            <Route exact path="/result">
              <Result />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;
