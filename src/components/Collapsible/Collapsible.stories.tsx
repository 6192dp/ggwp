import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Collapsible from './Collapsible';

export default {
    title: 'Collapsible',
    component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => <Collapsible {...args} />;

export const CheckboxComponent = Template.bind({});

CheckboxComponent.args = {
    filterOption: { options: [], title: '', type: '' },
    filterType: '',
    selectedFilters: { time: '', severity: [''] }
};