import * as React from 'react';
import {PyramidClubLinkedListPropType} from '../../types/pyramidtypes';
import PyramidClubLink from './PyramidClubLink';
import {PyramidContext} from '../../containers/PyramidManagerContainer';
import {
  //ClubDetail,
  PyramidDetailsState,
  PyramidDetailsActionType,
  ClubPyramidStatusType,
} from '../../types/pyramidtypes';
import {updateClubPyramid} from '../../api/clubApi';
import {ClubPyramidLinkType, ClubSearchActionType} from '../../types/clubtypes';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

const PyramidClubLinkList = ({
  clubs,
  selectedPyramidId,
  clubSearchDispatch,
}: PyramidClubLinkedListPropType) => {
  const context = React.useContext(PyramidContext);
  const handlePyramidClubSelected = (ev: any) => {
    console.log(ev.target.dataset.clubid);
    console.log(ev.target.dataset.buttonid);
    context.dispatchPyramidDetail({
      type: PyramidDetailsActionType.PyramidDetailsRemoveClub,
      actionPayload: {
        clubId: parseInt(ev.target.dataset.clubid),
        pyramidId: selectedPyramidId!,
      },
    });
    clubSearchDispatch({
      type: ClubSearchActionType.ClubSearchUpdatePyramid,
      updateClub: {
        clubID: parseInt(ev.target.dataset.clubid),
        newPyramidId: '-1',
      },
    });
    updateClubPyramid(parseInt(ev.target.dataset.clubid), -1);
  };
  if (clubs === undefined || clubs === null || clubs!.length === 0) {
    return (
      <div data-testid="empty-club-list" className="list-items">
        empty list
      </div>
    );
  }
  return (
    <>
      <Grid
        container
        data-testid="search-club-list"
        component="ul"
        direction="column"
      >
        {clubs
          ?.sort((a, b) => (a.ClubName! >= b.ClubName! ? 1 : -1))
          .map(club => (
            <PyramidClubLink
              key={club.UrlFriendlyName}
              {...{
                url: club.UrlFriendlyName,
                name: club.ClubName,
                active: club.Active,
                id: club.ClubID,
                pyramidId: club.PyramidId,
                handleChange: handlePyramidClubSelected,
              }}
            />
          ))}
      </Grid>
    </>
  );
};

export default PyramidClubLinkList;
