import * as React from 'react';
import {ClubLinkType} from '../../types/clubtypes';

//<Link to={'club/'+url}>
//            {name}
//        </Link>

const ClubPyramidClubLink = ({
  url,
  name,
  active,
  id,
}: ClubLinkType): JSX.Element => {
  return (
    <li className={active ? '' : 'InActiveClub'} key={name} data-clubid={id}>
      <span>{name}</span>
      <button>(-)</button>
      <button>(-+)</button>
    </li>
  );
};

export default ClubPyramidClubLink;
