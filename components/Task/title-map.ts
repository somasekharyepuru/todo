import { TaskContainerPropsType } from './taskContainer';

export const TaskTitleMap: {
  [key in TaskContainerPropsType]: {
    title: string;
  };
} = {
  all: {
    title: 'All',
  },
  today: {
    title: 'Today',
  },
  completed: {
    title: 'Completed',
  },
  custom: {
    title: 'Custom',
  },
  upcoming: {
    title: 'Upcoming',
  },
  project: {
    title: 'Project',
  },
};
