import { FilterOptionProps } from "../components/Filter/types";

export const filterOptions:FilterOptionProps[] = [
    { title: 'Severity', options: ['Low', 'Medium', 'High']},
    { title: 'Time', options: ['Last 24 hours', 'Last 72 hours', 'Last week', 'Last 6 months'] }
]