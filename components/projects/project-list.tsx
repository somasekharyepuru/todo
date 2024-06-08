import { GetProjectsQuery, useGetProjectsQuery } from '@/api';
import { MSLink } from '@/components';
import { useRouter } from 'next/router';
interface IProjectsListProps {
  projects: GetProjectsQuery['getProjects'];
}
export const ProjectList = ({ projects }: IProjectsListProps) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="flex flex-col gap-4">
        {projects?.map((project) => {
          return (
            <div key={project.id}>
              <MSLink
                href={`/projects/${project.id}`}
                className={`${id === project.id ? 'font-semibold' : ''}`}
              >
                <span># {project.name}</span>
              </MSLink>
            </div>
          );
        })}
      </div>
    </>
  );
};
