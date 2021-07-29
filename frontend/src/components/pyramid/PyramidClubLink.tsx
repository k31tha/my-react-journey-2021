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
  handleChange,
}: ClubLinkType): JSX.Element => {
  return (
    <li className={active ? '' : 'InActiveClub'} key={name} data-clubid={id}>
      <span>{name}</span>
      <button data-buttonid={'remove'} data-clubid={id} onClick={handleChange}>
        (-)
      </button>
      <button
        data-buttonid={'remove-alert'}
        data-clubid={id}
        onClick={handleChange}
      >
        (-+)
      </button>
    </li>
  );
};

export default ClubPyramidClubLink;
