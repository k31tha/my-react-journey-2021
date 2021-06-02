import ClubLink from './ClubLink';
import {ClubLinkedListPropType, ClubDetail} from '../../types/clubtypes';
import {getClubIndex, filterByIndex} from '../../filters/club/filterClubs';

type clubsByIndexTypeProps = {
  clubs: Array<ClubDetail>;
  clubIndex: string;
};
const ClubListByIndex = ({clubs, clubIndex}: clubsByIndexTypeProps): any => {
  const filteredClubs = filterByIndex(clubIndex, clubs!);
  return filteredClubs.map(club => (
    <ClubLink
      key={club.clubUrl}
      url={club.clubUrl}
      name={club.clubName}
      active={club.clubActive}
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
    <ul data-testid="club-by-index">
      {getClubIndex(clubs)?.map(clubIndex => (
        <li key={clubIndex}>
          <h2>{clubIndex}</h2>
          <ul data-testid={`club-by-index-${clubIndex}`}>
            <ClubListByIndex clubs={clubs} clubIndex={clubIndex} />
          </ul>
        </li>
      ))}
    </ul>
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
