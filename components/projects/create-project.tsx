import { useApi } from '@/api';
import { IProjectForm, ProjectForm } from './project-form';
import { MSModal, MSNotification } from '../lib/base';
import { useState } from 'react';
interface ICreateProjectProps {
  onClose: () => void;
  onSuccess?: () => void;
}
export const CreateProject = ({ onClose, onSuccess }: ICreateProjectProps) => {
  const [openCreateProjectModal, setOpenCreateProjectModal] = useState(true);
  const [addProject, addProjectStatus] = useApi.useCreateProjectMutation();
  const handleSubmit = (values: IProjectForm) => {
    addProject({
      project: {
        name: values.name,
        description: values.description,
      },
    })
      .unwrap()
      .then(() => {
        MSNotification('success', 'Project created successfully');
        onSuccess?.();
      })
      .catch((error) => {
        MSNotification('error', 'Project creation failed', 'please try again');
      });
  };
  const handleCloseCreateProjectModal = () => {
    setOpenCreateProjectModal(false);
    onClose?.();
  };
  return (
    <>
      <MSModal
        open={openCreateProjectModal}
        onCancel={handleCloseCreateProjectModal}
        title={'Create Project'}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <ProjectForm
          page="ADD"
          onSubmit={handleSubmit}
          onCancel={handleCloseCreateProjectModal}
          loading={addProjectStatus.isLoading}
        />
      </MSModal>
    </>
  );
};
