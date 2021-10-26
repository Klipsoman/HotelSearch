import { useEffect } from "react";
import "../style.scss";
import Login from "./Login/Login";
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Main from "./Main/Main";
import { setAuth } from "../redux/authReducer";
import { loadHotels } from "../redux/actions";

function App() {
  let isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    let auth = localStorage.getItem("auth");
    auth ? (auth = true) : (auth = false);
    dispatch(setAuth(auth));
  }, [isAuth]);

  useEffect(() => {
    dispatch(loadHotels());
  }, []);
  return (
    <Router>
      <div className="app">
        {!isAuth && (
          <Switch>
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        )}
        {isAuth && (
          <Switch>
            <Route exact path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
