import * as React from 'react';
import {ClubSearchByNameType} from '../../types/clubtypes';

const ClubSearchByName = ({
  nameSearch,
  handleNameSearch,
  children,
}: ClubSearchByNameType) => {
  return (
    <>
      {children}
      <input
        type="text"
        value={nameSearch}
        aria-label="club-search"
        onChange={handleNameSearch}
      />
    </>
  );
};

export default ClubSearchByName;
