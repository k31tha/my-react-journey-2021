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
    {
      ClubName: 'Knaphill',
      UrlFriendlyName: 'knaphill-fc',
      ClubID: 1,
      Active: true,
      MinorClub: false,
      DisableAutoUpdate: false,
    },
    {
      ClubName: 'Sutton Utd',
      UrlFriendlyName: 'sutton-utd',
      ClubID: 2,
      Active: false,
      MinorClub: false,
      DisableAutoUpdate: false,
    },
  ],
};
TemplatedClubLinkList.storyName = 'Basic Club Link List';
