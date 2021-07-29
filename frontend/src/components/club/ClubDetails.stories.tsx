import * as React from 'react';
import {ClubDetail} from '../../types/clubtypes';
import ClubDetails from './ClubDetails';
import {Meta, Story} from '@storybook/react';
export default {
  title: 'Components/Club/Club Details',
  component: ClubDetails,
} as Meta;

export const ClubDetailsStory = () => (
  <ClubDetails
    ClubID={1}
    ClubName={'Knaphill'}
    ClubLogo={null}
    UrlFriendlyName={'knaphill'}
    ClubAddress={'dummy street, dummy town, DD333MY'}
    Active={true}
    MinorClub={false}
    DisableAutoUpdate={false}
    StatusTypeId={null}
  />
);
export const ClubDetailsStory2 = () => (
  <ClubDetails
    ClubID={1}
    ClubName={'Woking'}
    ClubLogo={null}
    UrlFriendlyName={'woking'}
    ClubAddress={'dummy street, dummy town, DD333MY'}
    Active={true}
    MinorClub={false}
    DisableAutoUpdate={false}
    StatusTypeId={null}
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
  ClubID: 1,
  ClubName: 'Knaphill',
  ClubAddress: 'my address',
};
TemplatedClubDetails.storyName = 'Basic Templated Club';
