import * as React from 'react';
import {PyramidLinkProps} from '../../types/pyramidtypes';
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
    <li
      className={!pyramidStepInactive ? '' : 'InActiveLeague'}
      key={pyramidId}
      data-pyramidid={pyramidId}
      onClick={e => handleLeagueSelected(e)}
    >
      {leagueName} ({clubs?.length}) (Step {pyramidStep}){' '}
      {!pyramidStepInactive ? '' : '(InActive)'}
      {leagueSelected ? '(Selected)' : ''}
    </li>
  );
};

export default PyramidLink;
