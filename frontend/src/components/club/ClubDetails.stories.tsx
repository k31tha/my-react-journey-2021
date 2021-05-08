import * as React from 'react';
import ClubDetails, {ClubDetail} from './ClubDetails';
import {Meta, Story} from '@storybook/react';
export default {
  title: 'Components/Club/Club Details',
  component: ClubDetails,
} as Meta;

export const ClubDetailsStory = () => (
  <ClubDetails
    clubId={1}
    clubName={'Knaphill'}
    clubLogo={null}
    clubUrl={'knaphill'}
    clubAddress={'dummy street, dummy town, DD333MY'}
  />
);
export const ClubDetailsStory2 = () => (
  <ClubDetails
    clubId={1}
    clubName={'Woking'}
    clubLogo={null}
    clubUrl={'woking'}
    clubAddress={'dummy street, dummy town, DD333MY'}
  />
);

ClubDetailsStory.storyName = 'Basic Club';
ClubDetailsStory2.storyName = 'Club with Logo';

// adding Args Template:
const ClubDetailsTemplate: Story<ClubDetail> = args => (
  <ClubDetails {...args} />
);

export const TemplatedClubDetails = ClubDetailsTemplate.bind({});
TemplatedClubDetails.args = {
  clubId: 1,
  clubName: 'Knaphill',
  clubAddress: 'my address',
};
TemplatedClubDetails.storyName = 'Basic Templated Club';
