import { MainLayout } from '@/components/layout';
import { TaskContainer } from '@/components/Task/taskContainer';
import Head from 'next/head';
import React from 'react';

const UpcomingTasks = () => {
  return (
    <>
      <Head>
        <title>Upcoming Tasks</title>
      </Head>
      <TaskContainer type="upcoming" />
    </>
  );
};

export default UpcomingTasks;
