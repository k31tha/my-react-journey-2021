import * as React from 'react';
import {ClubSearchByActiveFlagType} from '../../types/clubtypes';

const ClubSearchByName = ({
  activeFlag,
  handleActiveFlagSearch,
  children,
}: ClubSearchByActiveFlagType) => {
  return (
    <>
      {children}
      <input
        type="checkbox"
        checked={activeFlag}
        aria-label="club-search-active-flag"
        onChange={handleActiveFlagSearch}
      />
    </>
  );
};

export default ClubSearchByName;
