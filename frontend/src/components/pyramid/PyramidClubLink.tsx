import * as React from 'react';
import {ClubLinkType} from '../../types/clubtypes';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

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
    <Grid
      item
      component="li"
      className={active ? '' : 'InActiveClub'}
      key={name}
      data-clubid={id}
      xs={12}
    >
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
    </Grid>
  );
};

export default ClubPyramidClubLink;
