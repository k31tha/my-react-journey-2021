import * as React from 'react';
import {PyramidSearchByNameType} from '../../types/pyramidtypes';

const PyramidSearchByName = ({
  nameSearch,
  handleNameSearch,
  children,
}: PyramidSearchByNameType) => {
  return (
    <>
      {children}
      <input
        type="text"
        value={nameSearch}
        aria-label="pyramid-name-search"
        onChange={handleNameSearch}
      />
    </>
  );
};

export default PyramidSearchByName;
