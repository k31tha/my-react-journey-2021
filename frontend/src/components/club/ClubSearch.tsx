import * as React from 'react';
import ClubLinkList from './ClubLinkList';
import ClubListByIndex from './ClubListByIndex';
import ClubSearchByName from './ClubSearchByName';
import {ClubDetail, ClubLinkedListPropType} from '../../types/clubtypes';
const filterByClubName = (clubName: string) => (club: ClubDetail) =>
  !clubName || club?.clubName?.toLowerCase().includes(clubName.toLowerCase());

const ClubSearch = ({clubs}: ClubLinkedListPropType) => {
  const [clubNameSearch, setClubNameSearch] = React.useState('');
  const handleNameSearchChange = (ev: any) => {
    setClubNameSearch(ev.target.value);
  };
  const filteredList = clubs?.filter(filterByClubName(clubNameSearch));
  return (
    <>
      <ClubSearchByName
        nameSearch={clubNameSearch}
        handleNameSearch={handleNameSearchChange}
      >
        {'Search by:'}
      </ClubSearchByName>
      <ClubLinkList clubs={filteredList} />;
      <ClubListByIndex clubs={filteredList} />;
    </>
  );
};
//<ClubListByIndex clubs={filteredList} />;
export default ClubSearch;
