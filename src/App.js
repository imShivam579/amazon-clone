import react, { useEffect } from "react";
import { auth } from "./firebase";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./redux/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>", authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
