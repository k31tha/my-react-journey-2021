import * as React from 'react';
import axios from 'axios';
import {
  //ClubDetail,
  PyramidDetailsState,
  PyramidDetailsActionType,
} from '../types/pyramidtypes';
import {ProcessingStatusType} from '../types/nlstypes';
import pyramidDetailsReducer from '../reducers/pyramidDetailsReducer';
import {getPyramidDetails} from '../api/apiConsts';

//const initialPyramidDetailsState: PyramidDetailsState = {
//  pyramidDetails: null,
//  pyramidDetailsStatus: ProcessingStatusType.pending,
//};

const usePyramidDetailsApi = (
  //state: any,
  dispatchPyramidDetail: any,
) => {
  //): [PyramidDetailsState] => {
  //  const [state, dispatch] = React.useReducer(
  //    pyramidDetailsReducer,
  //    initialPyramidDetailsState,
  //  );

  // TODO: move to a constant file/environment file
  // not sure re mounted
  //const endPoint = 'https://localhost:44350/api/PyramidApi/GetPyramid';
  const endPoint = getPyramidDetails;
  React.useEffect(() => {
    let mounted = true;
    // TODO: can make more generic?
    async function fetchData() {
      try {
        const response = await axios.get(endPoint);
        if (response.status === 200 && mounted === true) {
          dispatchPyramidDetail({
            type: PyramidDetailsActionType.PyramidDetailsFetchSuccess,
            payload: response.data,
          });
        }
      } catch (error) {
        //if (error.response.status === 404) {
        //  dispatch({
        //    type: PyramidDetailsActionType.PyramidDetailsFetchNotFound,
        //  });
        //} else {
        dispatchPyramidDetail({
          type: PyramidDetailsActionType.PyramidDetailsFetchFailure,
        });
        //}
      }
    }
    fetchData();
    //return () => (mounted = false);
  }, [dispatchPyramidDetail]);

  //return [state];
};
export default usePyramidDetailsApi;
