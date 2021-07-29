import * as React from 'react';
import ClubLink from './ClubLink';
import {ClubLinkedListPropType} from '../../types/clubtypes';

//const ClubLinkList = ({clubs}) => {
const ClubLinkList = ({clubs}: ClubLinkedListPropType) => {
  //const clubs: Array<ClubDetail> = [];
  if (clubs === undefined || clubs === null || clubs.length === 0) {
    return (
      <div data-testid="empty-club-list" className="list-items">
        empty list
      </div>
    );
  }
  return (
    <ul data-testid="search-club-list">
      {clubs?.map(club => (
        <ClubLink
          key={club.UrlFriendlyName!}
          {...{
            url: club.UrlFriendlyName!,
            name: club.ClubName,
            active: club.Active,
          }}
        />
      ))}
    </ul>
  );
};

//url?: string | null | undefined;
//name?: string | null;
//active?: boolean | null;
//id?: number | null;
//handleChange?: any;

export default ClubLinkList;
