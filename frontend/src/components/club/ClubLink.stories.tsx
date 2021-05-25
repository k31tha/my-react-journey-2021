import * as React from 'react';
import {MemoryRouter} from 'react-router-dom';

import {ClubLinkType} from '../../types/clubtypes';
import ClubLink from './ClubLink';
import {Meta, Story} from '@storybook/react';

export default {
  title: 'Components/Club/Club Link',
  component: ClubLink,
} as Meta;

// adding Args Template:
const ClubLinkTemplate: Story<ClubLinkType> = args => (
  <MemoryRouter>
    <ul>
      <ClubLink {...args} />
    </ul>
  </MemoryRouter>
);

export const TemplatedClubLink = ClubLinkTemplate.bind({});
TemplatedClubLink.args = {
  name: 'Knaphill',
  url: 'knaphill-fc',
  active: false,
};
TemplatedClubLink.storyName = 'Basic Club Link';
