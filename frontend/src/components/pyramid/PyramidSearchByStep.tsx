import * as React from 'react';
import {PyramidSearchByStepType} from '../../types/pyramidtypes';

const PyramidSearchByStep = ({
  pyramidStepSearch,
  handlePyramidStepSearchChange,
  children,
}: PyramidSearchByStepType) => {
  return (
    <>
      {children}
      <label htmlFor={'pyramid-step-search-1'}>
        <input
          type="checkbox"
          checked={pyramidStepSearch.pyramidstepsearch1}
          name="search-step"
          aria-label="pyramid-step-search-1"
          id="pyramidstepsearch1"
          onChange={handlePyramidStepSearchChange}
        />
        1
      </label>
      <label htmlFor={'pyramid-step-search-2'}>
        <input
          type="checkbox"
          checked={pyramidStepSearch.pyramidstepsearch2}
          name="search-step"
          aria-label="pyramid-step-search-2"
          id="pyramidstepsearch2"
          onChange={handlePyramidStepSearchChange}
        />
        2
      </label>
      <label htmlFor={'pyramid-step-search-3'}>
        <input
          type="checkbox"
          checked={pyramidStepSearch.pyramidstepsearch3}
          name="search-step"
          aria-label="pyramid-step-search-3"
          id="pyramidstepsearch3"
          onChange={handlePyramidStepSearchChange}
        />
        3
      </label>
      <label htmlFor={'pyramid-step-search-4'}>
        <input
          type="checkbox"
          checked={pyramidStepSearch.pyramidstepsearch4}
          name="search-step"
          aria-label="pyramid-step-search-4"
          id="pyramidstepsearch4"
          onChange={handlePyramidStepSearchChange}
        />
        4
      </label>
      <label htmlFor={'pyramid-step-search-5'}>
        <input
          type="checkbox"
          checked={pyramidStepSearch.pyramidstepsearch5}
          name="search-step"
          aria-label="pyramid-step-search-5"
          id="pyramidstepsearch5"
          onChange={handlePyramidStepSearchChange}
        />
        5
      </label>
      <label htmlFor={'pyramid-step-search-6'}>
        <input
          type="checkbox"
          checked={pyramidStepSearch.pyramidstepsearch6}
          name="search-step"
          aria-label="pyramid-step-search-6"
          id="pyramidstepsearch6"
          onChange={handlePyramidStepSearchChange}
        />
        6
      </label>
    </>
  );
};

export default PyramidSearchByStep;
