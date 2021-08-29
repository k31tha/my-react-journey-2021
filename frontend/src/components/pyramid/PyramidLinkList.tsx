import * as React from 'react';
import {PyramidDetails} from '../../types/pyramidtypes';
import PyramidLink from './PyramidLink';
import Grid from '@material-ui/core/Grid';

const PyramidLinkList = ({
  pyramidDetails,
  selectedPyramidId,
  handleLeagueSelected,
}: PyramidDetails) => {
  //const [selectedLeague, setSelectedLeague] = React.useState(0);
  //const handleLeagueSelected = (ev: any) => {
  //  setSelectedLeague(parseInt(ev.target.dataset.pyramidid));
  //};
  if (
    pyramidDetails === undefined ||
    pyramidDetails === null ||
    pyramidDetails.length === 0
  ) {
    return (
      <div data-testid="empty-pyramid-list" className="list-items">
        empty list
      </div>
    );
  }
  return (
    <Grid container data-testid="search-pyramid-list">
      {pyramidDetails?.map(pyramid => (
        <PyramidLink
          key={pyramid.pyramidId}
          {...{
            pyramidId: pyramid.pyramidId,
            leagueName: pyramid.leagueName,
            clubs: pyramid.clubs,
            pyramidStep: pyramid.pyramidStep,
            pyramidStepInactive: pyramid.pyramidStepInactive,
            leagueSelected: selectedPyramidId === pyramid.pyramidId,
            handleLeagueSelected: handleLeagueSelected,
          }}
        />
      ))}
    </Grid>
  );
};

export default PyramidLinkList;
