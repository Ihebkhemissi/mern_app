import "./App.css";
import Navbar from "./Compo/Navbar";
import { Switch, Route } from "react-router";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import ContactList from "./Pages/ContactList";
import Errors from "./Pages/Errors";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit"]} component={Add} />
        <Route path="/*" component={Errors} />
      </Switch>
    </>
  );
}

export default App;
