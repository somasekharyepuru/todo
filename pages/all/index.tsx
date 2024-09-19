import { TaskContainer } from '@/components/Task/taskContainer';
import { MainLayout } from '@/components/layout';
import Head from 'next/head';
import React from 'react';

const AllTasks = () => {
  return (
    <>
      <Head>
        <title>All Tasks</title>
      </Head>
      <TaskContainer type="all" />
    </>
  );
};

export default AllTasks;
