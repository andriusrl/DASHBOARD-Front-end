import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../../containers/LoginPage";
import FeedPage from "../../containers/FeedPage";
import HomePage from "../../containers/HomePage";




export const routes = {
    root: "/",
    login: "/login",
    feed: "/feed",
};

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={HomePage} />
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.feed} component={FeedPage} />

            </Switch>
        </ConnectedRouter>
    )
}
export default Router;