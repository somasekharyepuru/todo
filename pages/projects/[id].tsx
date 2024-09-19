import { useApi } from '@/api';
import { MainLayout } from '@/components/layout';
import { TaskContainer } from '@/components/Task/taskContainer';
import { Empty } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const ProjectTasks = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: projectData } = useApi.useGetProjectByIdQuery(
    {
      getProjectByIdId: id as string,
    },
    {
      skip: !id,
    }
  );
  if (!id) {
    return (
      <>
        <Empty description="No Project Found" />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{projectData?.getProjectById?.name || 'Project'} Details</title>
      </Head>
      <TaskContainer type="project" entityId={id as string} />
    </>
  );
};

export default ProjectTasks;
