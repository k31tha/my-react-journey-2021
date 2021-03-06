import axios from 'axios';
import {
  updateClubPyramidApi,
  addClubApi,
  addClubBasicSocialApi,
} from '../api/apiConsts';
import {ClubDetailApi, ClubBasicSocialDetailApi} from '../types/clubtypes';
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

export async function addClub(clubDetail: ClubDetailApi) {
  try {
    const response = await axios.post(addClubApi, clubDetail);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return clubDetail;
  }
}

export async function addClubBasicSocial(
  clubBasicSocialDetail: ClubBasicSocialDetailApi,
) {
  try {
    const response = await axios.post(
      addClubBasicSocialApi,
      clubBasicSocialDetail,
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return clubBasicSocialDetail;
  }
}
