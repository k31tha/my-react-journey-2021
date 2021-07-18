import * as React from 'react';
import {PyramidSearchByActiveFlagType} from '../../types/pyramidtypes';

const PyramidSearchByName = ({
  activeFlag,
  handleActiveFlagSearch,
  children,
}: PyramidSearchByActiveFlagType) => {
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

export default PyramidSearchByName;
