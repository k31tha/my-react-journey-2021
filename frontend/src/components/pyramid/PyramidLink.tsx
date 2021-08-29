import * as React from 'react';
import {PyramidLinkProps} from '../../types/pyramidtypes';
import Grid from '@material-ui/core/Grid';
//import {Link} from 'react-router-dom';

//<Link to={'club/'+url}>
//            {name}
//        </Link>

const PyramidLink = ({
  leagueName,
  pyramidId,
  clubs,
  pyramidStep,
  pyramidStepInactive,
  leagueSelected,
  handleLeagueSelected,
}: PyramidLinkProps): JSX.Element => {
  return (
    <Grid
      component="li"
      item
      xs={12}
      className={!pyramidStepInactive ? '' : 'InActiveLeague'}
      key={pyramidId}
      data-pyramidid={pyramidId}
      // @ts-expect-error
      onClick={e => handleLeagueSelected(e)}
    >
      {leagueName} ({clubs?.length}) (Step {pyramidStep}){' '}
      {!pyramidStepInactive ? '' : '(InActive)'}
      {leagueSelected ? '(Selected)' : ''}
    </Grid>
  );
};

export default PyramidLink;
