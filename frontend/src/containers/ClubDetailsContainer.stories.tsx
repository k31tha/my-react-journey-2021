import * as React from 'react';
import ClubDetailsContainer, {Props} from './ClubDetailsContainer';
import {Meta, Story} from '@storybook/react';
export default {
  title: 'Components/Club/Club Details Container',
  component: ClubDetailsContainer,
} as Meta;

export const ClubDetailsContainerStory = () => (
  <ClubDetailsContainer clubUrl={'knaphill-fc'} />
);
export const ClubDetailsContainerStory2 = () => (
  <ClubDetailsContainer clubUrl={'woking'} />
);

export const ClubDetailsContainerStory3 = () => (
  <ClubDetailsContainer clubUrl={'unknown-club'} />
);

ClubDetailsContainerStory.storyName = 'Basic Club one';
ClubDetailsContainerStory2.storyName = 'Basic Club two';
ClubDetailsContainerStory3.storyName = 'Unknown Club';

// adding Args Template:
const ClubDetailsContainerTemplate: Story<Props> = args => (
  <ClubDetailsContainer {...args} />
);

export const TemplatedClubDetailsContainer = ClubDetailsContainerTemplate.bind(
  {},
);
TemplatedClubDetailsContainer.args = {
  clubUrl: 'woking',
};
TemplatedClubDetailsContainer.storyName = 'Basic Templated Club Details';
