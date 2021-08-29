import * as React from 'react';
import ClubLinkList from './ClubLinkList';
import ClubListByIndex from './ClubListByIndex';
import ClubSearchByName from './ClubSearchByName';
import ClubSearchByActiveFlag from './ClubSearchByActiveFlag';
import {ClubSearchPropType} from '../../types/clubtypes';
import {
  filterByClubName,
  filterByActiveOnly,
} from '../../filters/club/filterClubs';
import Grid from '@material-ui/core/Grid';

const ClubSearch = ({
  clubs,
  resultType,
  resultContext,
  dispatch,
}: ClubSearchPropType) => {
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
    .sort((a, b) => (a.ClubName! >= b.ClubName! ? 1 : -1));
  const filteredListByStatus = filterByActiveOnly(
    filteredList,
    activeClubsOnly,
  );

  let resultTypeComponent;
  if (resultType === 'List') {
    resultTypeComponent = (
      <ClubLinkList
        clubs={filteredListByStatus}
        resultContext={resultContext}
        clubDispatch={dispatch}
      />
    );
  } else {
    resultTypeComponent = (
      <ClubListByIndex clubs={filteredListByStatus} resultContext={null} />
    );
  }

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
      <Grid container>{resultTypeComponent}</Grid>
    </>
  );
};
//<ClubListByIndex clubs={filteredList} />;
export default ClubSearch;
