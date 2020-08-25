import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../../containers/LoginPage";
import FeedPage from "../../containers/FeedPage";



export const routes = {
    root: "/",
    feed: "/feed",
  };

  function Router(props) {
      return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={LoginPage} />
                <Route exact path={routes.feed} component={FeedPage} />

            </Switch>
        </ConnectedRouter>
      )
  }
  export default Router;