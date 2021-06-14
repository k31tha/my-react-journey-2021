import * as React from 'react';
import ClubLinkList from './ClubLinkList';
import ClubListByIndex from './ClubListByIndex';
import ClubSearchByName from './ClubSearchByName';
import ClubSearchByActiveFlag from './ClubSearchByActiveFlag';
import {ClubDetail, ClubLinkedListPropType} from '../../types/clubtypes';
import {
  filterByClubName,
  filterByActiveOnly,
} from '../../filters/club/filterClubs';

const ClubSearch = ({clubs}: ClubLinkedListPropType) => {
  const [clubNameSearch, setClubNameSearch] = React.useState('');
  const [activeClubsOnly, setActiveClubsOnly] = React.useState(false);
  const handleNameSearchChange = (ev: any) => {
    setClubNameSearch(ev.target.value);
  };
  const handleActiveClubsOnlyFlagChange = (ev: any) => {
    setActiveClubsOnly(ev.target.checked);
  };
  const filteredList = clubs
    ?.filter(filterByClubName(clubNameSearch))
    .sort((a, b) => (a.clubName! >= b.clubName! ? 1 : -1));
  const filteredListByStatus = filterByActiveOnly(
    filteredList,
    activeClubsOnly,
  );
  return (
    <>
      <ClubSearchByName
        nameSearch={clubNameSearch}
        handleNameSearch={handleNameSearchChange}
      >
        {'Search by:'}
      </ClubSearchByName>
      <ClubSearchByActiveFlag
        activeFlag={activeClubsOnly}
        handleActiveFlagSearch={handleActiveClubsOnlyFlagChange}
      >
        {'Active Clubs Only:'}
      </ClubSearchByActiveFlag>
      <ClubLinkList clubs={filteredListByStatus} />
      <ClubListByIndex clubs={filteredListByStatus} />
    </>
  );
};
//<ClubListByIndex clubs={filteredList} />;
export default ClubSearch;
