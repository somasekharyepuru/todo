import { TaskContainer } from '@/components/Task/taskContainer';
import Head from 'next/head';

const CompletedTasks = () => {
  return (
    <>
      <Head>
        <title>Completed Tasks</title>
      </Head>
      <TaskContainer type="completed" />
    </>
  );
};

export default CompletedTasks;
