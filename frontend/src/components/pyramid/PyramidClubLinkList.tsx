import * as React from 'react';
import {PyramidClubLinkedListPropType} from '../../types/pyramidtypes';
import PyramidClubLink from './PyramidClubLink';

const PyramidClubLinkList = ({clubs}: PyramidClubLinkedListPropType) => {
  if (clubs === undefined || clubs === null || clubs!.length === 0) {
    return (
      <div data-testid="empty-club-list" className="list-items">
        empty list
      </div>
    );
  }
  return (
    <ul data-testid="search-club-list">
      {clubs?.map(club => (
        <PyramidClubLink
          key={club.UrlFriendlyName}
          {...{
            url: club.UrlFriendlyName,
            name: club.ClubName,
            active: club.Active,
            id: club.ClubID,
          }}
        />
      ))}
    </ul>
  );
};

export default PyramidClubLinkList;
