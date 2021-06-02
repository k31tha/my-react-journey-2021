import * as React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {ClubSearchByNameType} from '../../types/clubtypes';
import ClubSearchByName from './ClubSearchByName';
import {Meta, Story} from '@storybook/react';
export default {
  title: 'Components/Club/Club Search By Name',
  component: ClubSearchByName,
} as Meta;

// adding Args Template:
//<ClubLinkList {...args} />
const ClubSearchByNameTemplate: Story<ClubSearchByNameType> = args => (
  <ul>
    <MemoryRouter>
      <ClubSearchByName
        nameSearch={args.nameSearch}
        handleNameSearch={args.handleNameSearch}
      ></ClubSearchByName>
    </MemoryRouter>
  </ul>
);
//<ClubLinkList clubs={args} />

/* export const TemplatedClubSearchByName = ClubSearchByName.bind({});
ClubSearchByNameTemplate.args = {
  clubs: [
    {clubName: 'Knaphill', clubUrl: 'knaphill-fc', clubId: 1, clubActive: true},
    {
      clubName: 'Sutton Utd',
      clubUrl: 'sutton-utd',
      clubId: 2,
      clubActive: false,
    },
  ],
}; */
ClubSearchByNameTemplate.storyName = 'Basic Club Search By Name';
