import * as React from 'react';
import useClubSearchApi from '../../hooks/useClubSearchApi';
import ClubDetailsAdd from './ClubDetailForm';

const ClubAdd = (): JSX.Element => {
  const [{clubs, clubStatus}, dispatch] = useClubSearchApi();

  return (
    <div data-testid="clubadd">
      <ClubDetailsAdd clubDispatch={dispatch} />
    </div>
  );
};

export default ClubAdd;
