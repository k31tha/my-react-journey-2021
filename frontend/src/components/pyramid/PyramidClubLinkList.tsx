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

const PyramidClubLinkList = ({
  clubs,
  selectedPyramidId,
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
      <ul data-testid="search-club-list">
        {clubs?.map(club => (
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
      </ul>
    </>
  );
};

export default PyramidClubLinkList;
