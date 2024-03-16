import { TaskContainer } from '@/components/Task/taskContainer';
import { MainLayout } from '@/components/layout';
import React from 'react';

const AllTasks = () => {
  return (
    <MainLayout>
      <TaskContainer type="all" />
    </MainLayout>
  );
};

export default AllTasks;
