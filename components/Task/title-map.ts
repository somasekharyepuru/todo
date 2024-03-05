import { TaskContainerPropsType } from './taskContainer';

export const TaskTitleMap: {
  [key in TaskContainerPropsType]: {
    title: string;
  };
} = {
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
