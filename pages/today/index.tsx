import { TaskContainer } from '@/components/Task/taskContainer';
import { MainLayout } from '@/components/layout';
import React from 'react';

const TodayTasks = () => {
  return (
    <>
      <TaskContainer type="today" />
    </>
  );
};

export default TodayTasks;
