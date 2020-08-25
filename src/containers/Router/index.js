import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../../containers/LoginPage";


export const routes = {
    root: "/",
  };

  function Router(props) {
      return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={LoginPage} />
            </Switch>
        </ConnectedRouter>
      )
  }
  export default Router;