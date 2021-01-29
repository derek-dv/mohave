import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import ListingsDetail from "./pages/ListingsDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app_body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/listings/:id" component={ListingsDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
