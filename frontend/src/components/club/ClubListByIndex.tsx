import ClubLink from './ClubLink';
import {ClubLinkedListPropType, ClubDetail} from '../../types/clubtypes';
import {getClubIndex, filterByIndex} from '../../filters/club/filterClubs';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';

type clubsByIndexTypeProps = {
  clubs: Array<ClubDetail>;
  clubIndex: string;
};

const ClubListByIndex = ({clubs, clubIndex}: clubsByIndexTypeProps): any => {
  const filteredClubs = filterByIndex(clubIndex, clubs!).sort((a, b) =>
    a.ClubName! >= b.ClubName! ? 1 : -1,
  );
  return filteredClubs.map(club => (
    <ClubLink
      key={club.UrlFriendlyName}
      url={club.UrlFriendlyName}
      name={club.ClubName}
      active={club.Active}
    />
  ));
};

const ClubLinkListByIndex = ({clubs}: ClubLinkedListPropType): any => {
  //const clubs: Array<ClubDetail> = [];
  if (clubs === undefined || clubs === null || clubs.length === 0) {
    return (
      <div data-testid="empty-club-list" className="list-items">
        empty list
      </div>
    );
  }
  return (
    <Grid
      container
      component="ul"
      direction="column"
      wrap="wrap"
      alignContent="space-around"
      data-testid="club-by-index"
      className=""
    >
      {getClubIndex(clubs)?.map(clubIndex => (
        <li key={clubIndex} className="">
          <Typography variant={'h2'}>{clubIndex}</Typography>
          <Grid
            container
            component="ul"
            data-testid={`club-by-index-${clubIndex}`}
            className=""
            direction="row"
            wrap="wrap"
            alignContent="space-around"
          >
            <ClubListByIndex clubs={clubs} clubIndex={clubIndex} />
          </Grid>
        </li>
      ))}
    </Grid>
  );
};

//<ClubLink
//          key={club.clubUrl}
//          {...{
//            url: club.clubUrl,
//            name: club.clubName,
//            active: club.clubActive,
//          }}
//        />

export default ClubLinkListByIndex;
