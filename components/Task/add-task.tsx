import { PropsWithChildren } from 'react';
import { ITaskForm, TaskForm } from './task-form';
import { useApi } from '@/api';
import { MSCard, MSNotification } from '..';
import { IFormattedTaskForm } from './service';

export interface IAddTaskForm {
  onAddSuccess?: () => void;
  onCancel?: () => void;
  initialValues?: Partial<ITaskForm>;
}
export const AddTask = ({
  onAddSuccess,
  onCancel,
  initialValues,
}: PropsWithChildren<IAddTaskForm>) => {
  const [addTask, addTaskStatus] = useApi.useCreateTaskMutation();
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
      className="shadow-xl"
    >
      <TaskForm
        page="ADD"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={addTaskStatus.isLoading}
        initialValues={initialValues}
      />
    </MSCard>
  );
};
