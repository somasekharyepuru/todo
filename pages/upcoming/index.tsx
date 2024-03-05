import { MainLayout } from '@/components/layout';
import { TaskContainer } from '@/components/Task/taskContainer';
import React from 'react';

const UpcomingTasks = () => {
  return (
    <MainLayout>
      <TaskContainer type="upcoming" />
    </MainLayout>
  );
};

export default UpcomingTasks;
