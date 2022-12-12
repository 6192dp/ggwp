import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioGroup from './RadioGroup';

export default {
    title: 'RadioGroup',
    component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const RadioGroupComponent = Template.bind({});

RadioGroupComponent.args = {
    options: ['option1', 'option2'],
    selectedFilters: { time: '', severity: [''] },
};

RadioGroupComponent.argTypes = {
    updateSelectedFilters: { action: 'Update Radio Button Clicked' }
}