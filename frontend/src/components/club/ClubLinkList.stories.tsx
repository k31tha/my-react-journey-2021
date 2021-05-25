import * as React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {ClubLinkedListPropType} from '../../types/clubtypes';
import ClubLinkList from './ClubLinkList';
import {Meta, Story} from '@storybook/react';
export default {
  title: 'Components/Club/Club Link List',
  component: ClubLinkList,
} as Meta;

// adding Args Template:
//<ClubLinkList {...args} />
const ClubLinkListTemplate: Story<ClubLinkedListPropType> = args => (
  <ul>
    <MemoryRouter>
      <ClubLinkList clubs={args.clubs} />
    </MemoryRouter>
  </ul>
);
//<ClubLinkList clubs={args} />

export const TemplatedClubLinkList = ClubLinkListTemplate.bind({});
TemplatedClubLinkList.args = {
  clubs: [
    {clubName: 'Knaphill', clubUrl: 'knaphill-fc', clubId: 1, clubActive: true},
    {
      clubName: 'Sutton Utd',
      clubUrl: 'sutton-utd',
      clubId: 2,
      clubActive: false,
    },
  ],
};
TemplatedClubLinkList.storyName = 'Basic Club Link List';
