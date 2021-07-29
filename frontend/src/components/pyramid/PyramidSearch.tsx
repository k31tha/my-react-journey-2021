import * as React from 'react';
import PyramidLinkList from './PyramidLinkList';
import PyramidSearchByStep from './PyramidSearchByStep';
import PyramidSearchByName from './PyramidSearchByName';
import PyramidClubLinkList from './PyramidClubLinkList';
import PyramidSearchByActiveFlag from './PyramidSearchByActiveFlag';
import {PyramidDetail} from '../../types/pyramidtypes';
import {ProcessingStatus} from '../../types/nlstypes';
import {
  filterByStep,
  filterByPyramidName,
  filterByActiveOnly,
  filterClubsBySelectedLeague,
} from '../../filters/pyramid/filterPyramid';

type PyramidSearchProps = {
  pyramidDetails: Array<PyramidDetail> | undefined | null;
  pyramidDetailsStatus: ProcessingStatus;
};

const PyramidSearch = ({
  pyramidDetails,
  pyramidDetailsStatus,
}: PyramidSearchProps) => {
  const [pyramidNameSearch, setPyramidNameSearch] = React.useState('');
  const [pyramidStepSearch, setPyramidStepSearch] = React.useState({
    pyramidstepsearch1: true,
    pyramidstepsearch2: true,
    pyramidstepsearch3: true,
    pyramidstepsearch4: true,
    pyramidstepsearch5: true,
    pyramidstepsearch6: true,
  });
  const [activeLeaguesOnly, setActiveLeaguesOnly] = React.useState(false);
  const [selectedPyramidId, setSelectedPyramidId] = React.useState(0);
  const handleLeagueSelected = (ev: any) => {
    setSelectedPyramidId(parseInt(ev.target.dataset.pyramidid));
  };
  const handlePyramidStepSearchChange = (ev: any) => {
    setPyramidStepSearch({
      ...pyramidStepSearch,
      [ev.target.id]: ev.target.checked,
    });
  };
  const handleNameSearchChange = (ev: any) => {
    setPyramidNameSearch(ev.target.value);
  };
  const handleActiveLeaguesOnlyFlagChange = (ev: any) => {
    setActiveLeaguesOnly(ev.target.checked);
  };
  const filteredList = filterByStep(
    pyramidStepSearch,
    pyramidDetails!,
  ).sort((a, b) =>
    a.pyramidStep + '-' + a.leagueName! >= b.pyramidStep + '-' + b.leagueName!
      ? 1
      : -1,
  );
  const filteredListByName = filteredList?.filter(
    filterByPyramidName(pyramidNameSearch),
  );

  const filteredListByStatus = filterByActiveOnly(
    filteredListByName,
    activeLeaguesOnly,
  );

  const selectPyramidClubList = filterClubsBySelectedLeague(
    pyramidDetails!,
    selectedPyramidId,
  );

  return (
    <>
      <PyramidSearchByName
        nameSearch={pyramidNameSearch}
        handleNameSearch={handleNameSearchChange}
      >
        {'Search by:'}
      </PyramidSearchByName>
      <PyramidSearchByStep
        pyramidStepSearch={pyramidStepSearch}
        handlePyramidStepSearchChange={handlePyramidStepSearchChange}
      >
        {'Include Step:'}
      </PyramidSearchByStep>
      <PyramidSearchByActiveFlag
        activeFlag={activeLeaguesOnly}
        handleActiveFlagSearch={handleActiveLeaguesOnlyFlagChange}
      >
        {'Active Leagues Only:'}
      </PyramidSearchByActiveFlag>
      <PyramidLinkList
        pyramidDetails={filteredListByStatus}
        selectedPyramidId={selectedPyramidId}
        handleLeagueSelected={handleLeagueSelected}
      />
      <PyramidClubLinkList
        clubs={selectPyramidClubList}
        selectedPyramidId={selectedPyramidId}
      />
    </>
  );
};

export default PyramidSearch;
