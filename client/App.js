import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
// import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateOrder from "./components/CreateOrder";
import ShowOrder from "./components/ShowOrder";

const App = () => {
  const history = useHistory();
  return (
    <div className="container">
      <h2 className="text-center">Sistem Penjualan Sambal</h2>
      <Router>
        <Route path="/" exact component={ShowOrder} />
        <Route path="/createOrder" exact component={CreateOrder} />
      </Router>
    </div>
  );
};

export default App;
