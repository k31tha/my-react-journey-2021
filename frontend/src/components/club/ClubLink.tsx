import * as React from 'react';
import {ClubLinkType} from '../../types/clubtypes';
import {Link} from 'react-router-dom';

//<Link to={'club/'+url}>
//            {name}
//        </Link>

const ClubLink = ({url, name, active}: ClubLinkType): JSX.Element => {
  return (
    <li className={active ? '' : 'InActiveClub'} key={name}>
      <Link to={'/club/' + url}>{name}</Link>
    </li>
  );
};

export default ClubLink;
