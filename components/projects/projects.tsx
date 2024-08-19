import { Collapse, CollapseProps, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { ProjectList } from './project-list';
import { PlusOutlined } from '@ant-design/icons';
import { CreateProject } from './create-project';
import { useApi } from '@/api';

const Projects = () => {
  const [openCreateProjectModal, setOpenCreateProjectModal] = useState(false);
  const { data: rawProjects, ...projectsStatus } = useApi.useGetProjectsQuery();
  const [activeKey, setActiveKey] = useState<string[]>([]);
  const handleCreateProject = (event) => {
    event.stopPropagation();
    setOpenCreateProjectModal(true);
  };
  const handleCloseCreateProjectModal = () => {
    setOpenCreateProjectModal(false);
  };
  const projects: CollapseProps['items'] = [
    {
      key: '1',
      label: <div className="">Projects</div>,
      children: (
        <>
          {rawProjects ? (
            <ProjectList projects={rawProjects.getProjects} />
          ) : (
            ''
          )}
        </>
      ),
      extra: (
        <Tooltip title="Create project">
          <PlusOutlined onClick={handleCreateProject} />
        </Tooltip>
      ),
    },
  ];

  const handleCreateProjectSuccess = () => {
    projectsStatus.refetch();
    setOpenCreateProjectModal(false);
  };

  useEffect(() => {
    if (rawProjects?.getProjects?.length) {
      setActiveKey(['1']);
    } else {
      setActiveKey([]);
    }
  }, [rawProjects]);

  const handleOnChange = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Collapse
        bordered={false}
        accordion
        items={projects}
        expandIconPosition="end"
        // defaultActiveKey={['1']}
        activeKey={activeKey}
        onChange={handleOnChange}
      ></Collapse>
      {openCreateProjectModal ? (
        <CreateProject
          onClose={handleCloseCreateProjectModal}
          onSuccess={handleCreateProjectSuccess}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Projects;
