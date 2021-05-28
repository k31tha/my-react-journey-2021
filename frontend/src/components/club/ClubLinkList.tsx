import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
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
          key={club.clubUrl}
          {...{
            url: club.clubUrl,
            name: club.clubName,
            active: club.clubActive,
          }}
        />
      ))}
    </ul>
  );
};

export default ClubLinkList;
