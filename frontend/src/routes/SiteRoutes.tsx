import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ClubSearchContainer from '../containers/ClubSearchContainer';
import ClubDetailsContainer from '../containers/ClubDetailsContainer';
import NotFound from '../components/error/NotFound';

export function SiteRoutes() {
  return (
    <>
      <Switch>
        <Route exact={true} path="/">
          <ClubSearchContainer />
        </Route>
        <Route
          path="/club/:url"
          render={routerProps => (
            <ClubDetailsContainer clubUrl={routerProps.match.params.url} />
          )}
        />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default SiteRoutes;
