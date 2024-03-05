import { MainLayout } from '@/components/layout';
import { TaskContainer } from '@/components/Task/taskContainer';
import React from 'react';

const ProjectTasks = () => {
  return (
    <MainLayout>
      <TaskContainer />
    </MainLayout>
  );
};

export default ProjectTasks;
