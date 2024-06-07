import { GetTasksQuery, useUpdateTaskMutation } from '@/api';
import { PropsWithChildren, useMemo } from 'react';
import { MSCard, MSNotification } from '..';
import { IFormattedTaskForm, getInitialValuesForTaskForm } from './service';
import { TaskForm } from './task-form';

export interface IEditTaskForm {
  taskData: GetTasksQuery['getTasks'][number];
  onEditSuccess?: () => void;
  onCancel?: () => void;
}
export const EditTask = ({
  taskData,
  onEditSuccess,
  onCancel,
}: PropsWithChildren<IEditTaskForm>) => {
  const [ediTask, ediTaskStatus] = useUpdateTaskMutation();
  const handleSubmit = (values: IFormattedTaskForm) => {
    ediTask({
      task: {
        id: taskData.id,
        ...values,
      },
    })
      .unwrap()
      .then(() => {
        onEditSuccess?.();
      })
      .catch((error) => MSNotification('error', error?.message));
  };
  const handleCancel = () => {
    onCancel?.();
  };
  const initialValues = useMemo(() => {
    if (taskData) {
      return getInitialValuesForTaskForm(taskData);
    }
  }, [taskData]);
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
        page="EDIT"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={ediTaskStatus.isLoading}
        initialValues={initialValues}
      />
    </MSCard>
  );
};
