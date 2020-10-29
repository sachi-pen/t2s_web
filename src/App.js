import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { useRecoilValue } from "recoil";
import { useSnackbar } from "react-simple-snackbar";
import "./App.css";
import { appException } from "./App.states";

import Home from "./pages/Home.page";
import Auth from "./pages/Auth.page";

function App() {
  let history = useHistory();
  const appExceptionVal = useRecoilValue(appException);
  const [openSnackbar] = useSnackbar();

  useEffect(() => {
    //api exceptions
    if (appExceptionVal) {
      if (appExceptionVal.status === 401) {
        history.push("/auth");
        openSnackbar(appExceptionVal.statusText);
      } else {
        if (appExceptionVal.message) {
          openSnackbar(appExceptionVal.message);
        }
      }
    }
  }, [appExceptionVal]);

  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
