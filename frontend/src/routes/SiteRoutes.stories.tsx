import {Meta} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {SiteRoutes} from './SiteRoutes';
export default {
  component: SiteRoutes,
  title: 'Components/Routes/Site Routes',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} as Meta;
export const clubListData = [
  {
    name: 'Woking FC',
    url: 'woking-fc',
    active: true,
    clubofficialwebsiteurl: 'https://wokingfc.co.uk/',
    logoname: 'WokingLogo.png',
  },
  {
    name: 'Leyton Orient FC',
    url: 'leyton-orient-fc',
    active: false,
    clubofficialwebsiteurl: '',
    logoname: '',
  },
  {
    name: 'Knaphill FC',
    url: 'knaphill-fc',
    active: true,
    clubofficialwebsiteurl: 'https://knaphill.co.uk/',
    logoname: '',
  },
];

export const Default = () => {
  return <SiteRoutes />;
};

Default.story = {
  decorators: [StoryRouter({})],
};

export const ClubPage = () => {
  return <SiteRoutes />;
};

ClubPage.story = {
  decorators: [
    StoryRouter({}, {initialEntries: ['/club/' + clubListData[0].url]}),
  ],
};

export const ClubPageNotFound = () => {
  return <SiteRoutes />;
};

ClubPageNotFound.story = {
  decorators: [StoryRouter({}, {initialEntries: ['/club/unknownclub']})],
};

export const PageNotFound = () => {
  return <SiteRoutes />;
};

PageNotFound.story = {
  decorators: [StoryRouter({}, {initialEntries: ['/test-page']})],
};
