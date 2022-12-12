import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxComponent = Template.bind({});

CheckboxComponent.args = {
    option: 'Medium',
    selectedFilters: { time: '', severity: ['Low'] },
};

CheckboxComponent.argTypes = {
    updateSelectedFilters: { action: 'Update Selected Filters Clicked' }
}