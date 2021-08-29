import * as React from 'react';
import PyramidLinkList from './PyramidLinkList';
import PyramidSearchByStep from './PyramidSearchByStep';
import PyramidSearchByName from './PyramidSearchByName';
import PyramidClubLinkList from './PyramidClubLinkList';
import PyramidSearchByActiveFlag from './PyramidSearchByActiveFlag';
import {PyramidDetail, ClubPyramidStatusType} from '../../types/pyramidtypes';
import {ClubSearchAction} from '../../types/clubtypes';
import {ProcessingStatus} from '../../types/nlstypes';
import {PyramidContext} from '../../containers/PyramidManagerContainer';
import {
  filterByStep,
  filterByPyramidName,
  filterByActiveOnly,
  filterClubsBySelectedLeague,
} from '../../filters/pyramid/filterPyramid';
import {
  //ClubDetail,
  PyramidDetailsState,
  PyramidDetailsActionType,
} from '../../types/pyramidtypes';
import Grid from '@material-ui/core/Grid';

type PyramidSearchProps = {
  pyramidDetails: Array<PyramidDetail> | undefined | null;
  pyramidDetailsStatus: ProcessingStatus;
  clubSearchDispatch: React.Dispatch<ClubSearchAction>;
};

const PyramidSearch = ({
  pyramidDetails,
  pyramidDetailsStatus,
  clubSearchDispatch,
}: PyramidSearchProps) => {
  const context = React.useContext(PyramidContext);
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
    context.dispatchPyramidDetail({
      type: PyramidDetailsActionType.PyramidDetailsSelected,
      actionPayload: {
        pyramidId: parseInt(ev.target.dataset.pyramidid),
      },
    });
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

  let errormessage =
    context.state.clubPyramidUpdateStatus ===
    ClubPyramidStatusType.pyramidnotselected ? (
      <p>no league selected</p>
    ) : null;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <PyramidSearchByName
              nameSearch={pyramidNameSearch}
              handleNameSearch={handleNameSearchChange}
            >
              {'Search by:'}
            </PyramidSearchByName>
          </Grid>
          <Grid item xs={12}>
            <PyramidSearchByStep
              pyramidStepSearch={pyramidStepSearch}
              handlePyramidStepSearchChange={handlePyramidStepSearchChange}
            >
              {'Include Step:'}
            </PyramidSearchByStep>
          </Grid>
          <Grid item xs={12}>
            <PyramidSearchByActiveFlag
              activeFlag={activeLeaguesOnly}
              handleActiveFlagSearch={handleActiveLeaguesOnlyFlagChange}
            >
              {'Active Leagues Only:'}
            </PyramidSearchByActiveFlag>
          </Grid>
          <Grid item xs={12}>
            {errormessage}
            <PyramidLinkList
              pyramidDetails={filteredListByStatus}
              selectedPyramidId={selectedPyramidId}
              handleLeagueSelected={handleLeagueSelected}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <PyramidClubLinkList
          clubs={selectPyramidClubList}
          selectedPyramidId={selectedPyramidId}
          clubSearchDispatch={clubSearchDispatch}
        />
      </Grid>
    </Grid>
  );
};

export default PyramidSearch;
