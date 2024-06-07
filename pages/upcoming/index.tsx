import { MainLayout } from '@/components/layout';
import { TaskContainer } from '@/components/Task/taskContainer';
import React from 'react';

const UpcomingTasks = () => {
  return (
    <>
      <TaskContainer type="upcoming" />
    </>
  );
};

export default UpcomingTasks;
