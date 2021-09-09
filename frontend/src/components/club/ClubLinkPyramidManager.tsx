import * as React from 'react';
import {ClubPyramidLinkType, ClubSearchActionType} from '../../types/clubtypes';
import {PyramidContext} from '../../containers/PyramidManagerContainer';
import {PyramidDetailsActionType} from '../../types/pyramidtypes';
import {updateClubPyramid} from '../../api/clubApi';
import Grid from '@material-ui/core/Grid';

//<Link to={'club/'+url}>
//            {name}
//        </Link>

const ClubLinkPyramidManager = ({
  //id,
  //url,
  //name,
  //active,
  club,
  pyramidId,
  clubDispatch,
}: ClubPyramidLinkType): JSX.Element => {
  const context = React.useContext(PyramidContext);
  const handlePyramidClubSelected = (ev: any) => {
    //console.log(ev.target.dataset.clubid);
    //console.log(ev.target.dataset.buttonid);
    //console.log(ev.target.dataset.selectedpyramidid);
    //console.log(ev.target.dataset.oldpyramidid);
    if (parseInt(ev.target.dataset.selectedpyramidid) > 0) {
      if (
        parseInt(ev.target.dataset.selectedpyramidid) !==
        parseInt(ev.target.dataset.oldpyramidid)
      ) {
        context.dispatchPyramidDetail({
          type: PyramidDetailsActionType.PyramidDetailsAddClub,
          actionPayload: {
            clubId: parseInt(ev.target.dataset.clubid),
            club: club,
            newPyramidId: parseInt(ev.target.dataset.selectedpyramidid),
            pyramidId: parseInt(ev.target.dataset.oldpyramidid),
          },
        });
        clubDispatch({
          type: ClubSearchActionType.ClubSearchUpdatePyramid,
          updateClub: {
            clubID: parseInt(ev.target.dataset.clubid),
            newPyramidId: parseInt(ev.target.dataset.selectedpyramidid),
          },
        });
        updateClubPyramid(
          parseInt(ev.target.dataset.clubid),
          parseInt(ev.target.dataset.selectedpyramidid),
        );
      }
    } else {
      context.dispatchPyramidDetail({
        type: PyramidDetailsActionType.PyramidDetailsNotSelected,
      });
    }
  };
  // pyramidId: selectedPyramidId!,
  return (
    <Grid
      component="li"
      item
      xs={12}
      className={club.Active ? '' : 'InActiveClub'}
      key={club.ClubName}
    >
      {club.ClubName} ({pyramidId === '' ? 'N' : pyramidId}){' '}
      <button
        data-buttonid={'add'}
        data-clubid={club.ClubID}
        data-selectedpyramidid={context.state.selectedPyramidId}
        data-oldpyramidid={pyramidId}
        onClick={handlePyramidClubSelected}
      >
        (+)
      </button>
    </Grid>
  );
};

export default ClubLinkPyramidManager;
