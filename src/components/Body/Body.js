import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute } from "../../components";
import routes from "../../routes";

function Body() {
  return (
    <>
      <Switch>
        {routes.map((route) => {
          const { path, component, exact, isProtedcted } = route;
          if (isProtedcted) {
            return (
              <ProtectedRoute
                path={path}
                exact={exact}
                key={path}
                component={component}
              />
            );
          }
          return (
            <Route path={path} exact={exact} key={path} component={component} />
          );
        })}
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default Body;
