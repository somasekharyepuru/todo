import { GetTasksQuery } from '@/api';
import { ITaskForm } from './task-form';
import { TaskContainerPropsType } from './taskContainer';
import dayjs from 'dayjs';
export interface IFormattedTaskForm extends Omit<ITaskForm, 'due_date'> {
  due_date?: string | null;
}
export const getVariablesForTask = (type: TaskContainerPropsType) => {
  return null;
};
export const formatTaskFormDataToAPI = (
  values: ITaskForm
): IFormattedTaskForm => {
  return {
    ...values,
    due_date: values?.due_date
      ? dayjs(values.due_date).format('YYYY-MM-DD')
      : null,
  };
};

export const getInitialValuesForTaskForm = (
  taskData: GetTasksQuery['getTasks'][number]
): ITaskForm => {
  return {
    title: taskData.title,
    description: taskData.description,
    due_date: taskData.due_date ? dayjs(taskData.due_date, 'YYYY-MM-DD') : null,
    is_completed: taskData.is_completed,
    priority: taskData.priority,
    project_id: taskData.project?.id,
  };
};
