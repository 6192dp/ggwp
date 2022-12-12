import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterButton from './FilterButton';

export default {
    title: 'FilterButton',
    component: FilterButton,
} as ComponentMeta<typeof FilterButton>;

const Template: ComponentStory<typeof FilterButton> = (args) => <FilterButton {...args} />;

export const FilterBodyComponent = Template.bind({});

FilterBodyComponent.args = {
    isFilterOpen: true, 
};

FilterBodyComponent.argTypes = {
    updateIsFilterOpen:  {action :'Update filter display clicked'}
}