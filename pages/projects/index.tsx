import { useApi } from '@/api';
import { MSCard } from '@/components';
import { List } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Projects = () => {
  const router = useRouter();
  const { data: projects, ...projectsStatus } = useApi.useGetProjectsQuery();
  const handleRedirectToDetails = (id) => {
    // Redirect to project details page
    router.push(`/projects/${id}`);
  };
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="m-4">
        <MSCard>
          <List
            loading={projectsStatus.isFetching}
            itemLayout="horizontal"
            dataSource={projects?.getProjects || []}
            renderItem={(item, index) => (
              <List.Item
                className="cursor-pointer"
                onClick={() => handleRedirectToDetails(item.id)}
              >
                <List.Item.Meta
                  title={item?.name}
                  description={item?.description}
                />
              </List.Item>
            )}
          />
        </MSCard>
      </div>
    </>
  );
};

export default Projects;
