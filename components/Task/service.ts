import { GetTaskInput, GetTasksQuery, TaskDateTypeEnum } from '@/api';
import { ITaskForm } from './task-form';
import { TaskContainerPropsType } from './taskContainer';
import dayjs from 'dayjs';
import { IPagination } from '../lib/interfaces/pagination.model';
export interface IFormattedTaskForm extends Omit<ITaskForm, 'due_date'> {
  due_date?: string | null;
}
export type IFormattedTask = GetTasksQuery['getTasks'][number] & {
  dueDateFormatted?: string;
};
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
interface IFilterInputAdditionalInfo {
  projectId?: string | null;
}
export const getFilterValues = ({
  type,
  additionalInfo,
  pagination,
}: {
  type: TaskContainerPropsType;
  additionalInfo?: IFilterInputAdditionalInfo;
  pagination?: IPagination;
}): GetTaskInput => {
  const filter: GetTaskInput = {
    limit: pagination?.limit || 20,
    skip: pagination?.skip || 0,
  };
  if (type === 'today') {
    filter.task_date_type = TaskDateTypeEnum.Today;
  }
  if (type === 'upcoming') {
    filter.task_date_type = TaskDateTypeEnum.Upcoming;
  }
  if (type === 'project') {
    filter.project_id = additionalInfo?.projectId;
  }
  return filter;
};
export const getFormattedTasks = (
  tasks: GetTasksQuery['getTasks']
): IFormattedTask[] => {
  const updatedTasks: IFormattedTask[] = [];
  tasks.forEach((task) => {
    updatedTasks.push({
      ...task,
      dueDateFormatted: dayjs(task.due_date).format('DD-MM-YYYY'),
    });
  });
  return updatedTasks;
};
