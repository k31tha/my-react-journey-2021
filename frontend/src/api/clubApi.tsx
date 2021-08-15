import axios from 'axios';
import {updateClubPyramidApi} from '../api/apiConsts';
export async function updateClubPyramid(clubId: number, pyramidId: number) {
  try {
    const response = await axios.post(updateClubPyramidApi, {
      clubId: clubId,
      pyramidId: pyramidId,
    });
    if (response.status === 200) {
    }
  } catch (error) {}
}
