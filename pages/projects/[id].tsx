import { MainLayout } from '@/components/layout';
import { TaskContainer } from '@/components/Task/taskContainer';
import React from 'react';

const ProjectTasks = () => {
  return (
    <MainLayout>
      <TaskContainer type="project" />
    </MainLayout>
  );
};

export default ProjectTasks;
