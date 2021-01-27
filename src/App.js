import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Landing />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
