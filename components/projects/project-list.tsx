import { GetProjectsQuery, useGetProjectsQuery } from '@/api';
import { MSLink } from '@/components';
interface IProjectsListProps {
  projects: GetProjectsQuery['getProjects'];
}
export const ProjectList = ({ projects }: IProjectsListProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {projects?.map((project) => {
          return (
            <div key={project.id}>
              <MSLink href={`/projects/${project.id}`}>
                <span># {project.name}</span>
              </MSLink>
            </div>
          );
        })}
      </div>
    </>
  );
};
