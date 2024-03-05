import { PropsWithChildren } from 'react';
import { ITaskForm, TaskForm } from './task-form';
import { useCreateTaskMutation } from '@/api';
import { MSCard, MSNotification } from '..';
import { IFormattedTaskForm } from './service';

export interface IAddTaskForm {
  onAddSuccess?: () => void;
  onCancel?: () => void;
}
export const AddTask = ({
  onAddSuccess,
  onCancel,
}: PropsWithChildren<IAddTaskForm>) => {
  const [addTask, addTaskStatus] = useCreateTaskMutation();
  const handleSubmit = (values: IFormattedTaskForm) => {
    addTask({
      task: {
        ...values,
      },
    })
      .unwrap()
      .then(() => {
        onAddSuccess?.();
      })
      .catch((error) => MSNotification('error', error?.message));
  };
  const handleCancel = () => {
    onCancel?.();
  };
  return (
    <MSCard
      styles={{
        body: {
          padding: 8,
        },
      }}
    >
      <TaskForm
        page="ADD"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={addTaskStatus.isLoading}
      />
    </MSCard>
  );
};
