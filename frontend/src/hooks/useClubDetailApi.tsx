import * as React from 'react';
import axios from 'axios';
import {ClubDetail} from '../types/clubtypes';
import {ProcessingStatus} from '../types/nlstypes';

const useClubDetailApi = (
  clubUrl: string,
): [ClubDetail | null, ProcessingStatus] => {
  const [clubDetails, setClubDetails] = React.useState<ClubDetail | null>(null);
  const [status, setStatus] = React.useState<ProcessingStatus>('pending');

  // TODO: move to a constant file/environment file
  const endPoint = 'http://localhost:3090/clubs/';
  React.useEffect(() => {
    // TODO: can make more generic?
    async function fetchData() {
      try {
        const response = await axios.get(endPoint + clubUrl);
        if (response.status === 200) {
          setClubDetails(response.data);
          setStatus('loaded');
        }
      } catch (error) {
        if (error.response.status === 404) {
          setStatus('notfound');
        } else {
          setStatus('error');
        }
      }
    }
    fetchData();
  }, [clubUrl]);

  return [clubDetails, status];
};
export default useClubDetailApi;
