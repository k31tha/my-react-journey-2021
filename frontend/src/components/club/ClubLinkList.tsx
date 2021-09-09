import * as React from 'react';
import ClubLink from './ClubLink';
import ClubLinkPyramidManager from './ClubLinkPyramidManager';
import {ClubLinkedListPropType} from '../../types/clubtypes';
import Grid from '@material-ui/core/Grid';

//const ClubLinkList = ({clubs}) => {
const ClubLinkList = ({
  clubs,
  resultContext,
  clubDispatch,
}: ClubLinkedListPropType) => {
  //const clubs: Array<ClubDetail> = [];
  if (clubs === undefined || clubs === null || clubs.length === 0) {
    return (
      <div data-testid="empty-club-list" className="list-items">
        empty list
      </div>
    );
  }

  return (
    <Grid container component="ul" data-testid="search-club-list">
      {clubs?.map(club =>
        resultContext === 'PyramidManager' ? (
          <ClubLinkPyramidManager
            key={club.UrlFriendlyName!}
            {...{
              club: club,
              pyramidId: club.PyramidId,
              clubDispatch: clubDispatch,
            }}
          />
        ) : (
          <ClubLink
            key={club.UrlFriendlyName!}
            {...{
              url: club.UrlFriendlyName!,
              name: club.ClubName,
              active: club.Active,
            }}
          />
        ),
      )}
    </Grid>
  );
};

//url?: string | null | undefined;
//name?: string | null;
//active?: boolean | null;
//id?: number | null;
//handleChange?: any;

export default ClubLinkList;
