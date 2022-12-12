import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterBody from './FilterBody';

export default {
    title: 'FilterBody',
    component: FilterBody,
} as ComponentMeta<typeof FilterBody>;

const Template: ComponentStory<typeof FilterBody> = (args) => <FilterBody {...args} />;

export const FilterBodyComponent = Template.bind({});

FilterBodyComponent.args = {
    selectedFilters: { time: '', severity: ['Low'] }, initState: { severity: [''], time: '' }
};

FilterBodyComponent.argTypes = {
    updateSelectedFilters: { action: 'Update selected filter clicked' }
}