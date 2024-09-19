import { TaskContainer } from '@/components/Task/taskContainer';
import { MainLayout } from '@/components/layout';
import Head from 'next/head';
import React from 'react';

const TodayTasks = () => {
  return (
    <>
      <Head>
        <title>Today Tasks</title>
      </Head>
      <TaskContainer type="today" />
    </>
  );
};

export default TodayTasks;
