import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
