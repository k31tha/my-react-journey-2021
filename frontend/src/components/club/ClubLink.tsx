import {ClubLinkType} from '../../types/clubtypes';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

//<Link to={'club/'+url}>
//            {name}
//        </Link>

const ClubLink = ({url, name, active}: ClubLinkType): JSX.Element => {
  return (
    <Grid
      item
      component="li"
      className={active ? '' : ' InActiveClub'}
      key={name}
      xs={12}
      lg={4}
    >
      <Link to={'club/' + url}>{name}</Link>
    </Grid>
  );
};

export default ClubLink;
