import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PyramidManagerContainer from '../containers/PyramidManagerContainer';
import ClubSearchContainer from '../containers/ClubSearchContainer';
import ClubDetailsContainer from '../containers/ClubDetailsContainer';
import ClubAdd from '../components/club/ClubAdd';
import NotFound from '../components/error/NotFound';

export function SiteRoutes() {
  return (
    <>
      <Switch>
        <Route exact={true} path="/">
          <ClubSearchContainer resultType={'ByIndex'} />
        </Route>
        <Route
          exact={true}
          path="/club/add"
          render={routerProps => <ClubAdd />}
        />
        <Route path="/club/add/:url" render={routerProps => <ClubAdd />} />
        <Route
          path="/club/:url"
          render={routerProps => (
            <ClubDetailsContainer clubUrl={routerProps.match.params.url} />
          )}
        />
        <Route
          path="/pyramidmanager"
          render={routerProps => <PyramidManagerContainer />}
        />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default SiteRoutes;
