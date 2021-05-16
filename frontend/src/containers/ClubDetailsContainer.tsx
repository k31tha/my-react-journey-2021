import * as React from 'react';
import axios from 'axios';
import ClubDetails, {ClubDetail} from '../components/club/ClubDetails';

export type Props = {
  clubUrl: string;
};

export type ProcessingStatus =
  | 'pending'
  | 'complete'
  | 'loaded'
  | 'error'
  | 'warning'
  | 'notfound';

const ClubDetailsContainer = ({clubUrl}: Props): JSX.Element => {
  // Hold Club Details in State
  const [clubDetails, setClubDetails] = React.useState<ClubDetail>();
  const [status, setStatus] = React.useState<ProcessingStatus>('pending');

  // TODO: move to a constant file/environment file
  const endPoint = 'http://localhost:3090/clubs/';
  React.useEffect(() => {
    // TODO: can make more generic?
    async function fetchData() {
      try {
        const response = await axios.get(endPoint + clubUrl);
        setClubDetails(response.data);
        setStatus('loaded');
      } catch (error) {
        //console.dir(error.response);
        if (error.response.status === 404) {
          //console.log('found status is 404');
          setStatus('notfound');
        } else {
          //console.log('status is >' + error.response.status + '<');
          setStatus('error');
        }
      }
    }
    fetchData();
  }, [clubUrl]);
  if (status === 'pending') {
    return (
      <>
        <p>club details loading</p>
      </>
    );
  } else if (status === 'error') {
    return (
      <>
        <p>club details loading errored {status}</p>
      </>
    );
  } else if (
    status === 'notfound' ||
    clubDetails === undefined ||
    clubDetails.clubId === null
  ) {
    //-@ts-expect-error
    return (
      <>
        <p>club not found {clubUrl}</p>
      </>
    );
  } else if (status === 'loaded') {
    return (
      <>
        <ClubDetails {...clubDetails} />
      </>
    );
  }
};

export default ClubDetailsContainer;
