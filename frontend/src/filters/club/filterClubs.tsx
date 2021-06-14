import {ClubDetail} from '../../types/clubtypes';
export type clubsByIndex = {
  index: string;
  clubs: Array<ClubDetail>;
  clubCount: number;
};

export type clubsByIndexList = Array<clubsByIndex>;

//const indexList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const getClubIndex = (clubs: Array<ClubDetail>): Array<string> => {
  return Array.from(new Set(clubs.map(u => u.clubName!.charAt(0))));
};

export const filterByIndex = (clubIndex: string, club: Array<ClubDetail>) =>
  club!.filter(club =>
    club.clubName!.toLowerCase().startsWith(clubIndex.toLowerCase()),
  );
export const filterByActiveOnly = (
  club: Array<ClubDetail> | undefined,
  activeOnly = false,
) =>
  club!.filter(club => (activeOnly === true ? club.clubActive === true : true));

export const filterByClubName = (clubName: string) => (club: ClubDetail) =>
  !clubName || club?.clubName?.toLowerCase().includes(clubName.toLowerCase());

//const getClubsByIndex = (clubs: Array<ClubDetail>): clubsByIndexList => {};
