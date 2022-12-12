import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterTile from './FilterTile';

export default {
    title: 'FilterTile',
    component: FilterTile,
} as ComponentMeta<typeof FilterTile>;

const Template: ComponentStory<typeof FilterTile> = (args) => <FilterTile {...args} />;

export const FilterTileComponent = Template.bind({});

FilterTileComponent.args = {
    label: 'Time', item: '24hours ago', 
};

FilterTileComponent.argTypes = {
    handleCancelClick: {action :'Cancel Filter'}
}