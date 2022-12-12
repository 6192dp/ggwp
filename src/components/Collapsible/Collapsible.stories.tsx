import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Collapsible from './Collapsible';

export default {
    title: 'Collapsible',
    component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => <Collapsible {...args} />;

export const CollapsibleComponent = Template.bind({});

CollapsibleComponent.args = {
    filterOption: { options: [], title: 'Check1', type: '' },
    filterType: '',
    selectedFilters: { time: '', severity: ['Low'] }
};

CollapsibleComponent.argTypes = {
    updateSelectedFilters: { action: 'Click Collapsible Component' }
}
