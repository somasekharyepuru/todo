import { TaskContainer } from '@/components/Task/taskContainer';
import { MainLayout } from '@/components/layout';
import React from 'react';

const TodayTasks = () => {
  return (
    <MainLayout>
      <TaskContainer type="today" />
    </MainLayout>
  );
};

export default TodayTasks;
