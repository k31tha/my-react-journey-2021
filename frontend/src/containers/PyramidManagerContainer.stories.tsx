import * as React from 'react';
import PyramidManagerContainer, {Props} from './PyramidManagerContainer';
import {Meta, Story} from '@storybook/react';

// TODO: Add Delay to help snapshot

export default {
  title: 'Components/Pyramid/ Pyramid Manager Container',
  component: PyramidManagerContainer,
} as Meta;

export const PyramidManagerContainerStory = () => <PyramidManagerContainer />;

PyramidManagerContainerStory.storyName = 'Basic Club one';

// adding Args Template:
const PyramidManagerContainerTemplate: Story<Props> = args => (
  <PyramidManagerContainer {...args} />
);

export const TemplatedPyramidManagerContainer = PyramidManagerContainerTemplate.bind(
  {},
);
TemplatedPyramidManagerContainer.args = {};
TemplatedPyramidManagerContainer.storyName = 'Basic Pyramid Manager';
