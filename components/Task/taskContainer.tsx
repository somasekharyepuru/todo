import { GetTasksQuery, useApi } from '@/api';
import { PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import { MSButton, MSNotification, MSSpinner } from '..';
import { AddTask } from './add-task';
import { EditTask } from './edit-task';
import { IFormattedTask, getFilterValues, getFormattedTasks } from './service';
import { TaskCard } from './task-card';
import { TaskTitleMap } from './title-map';
import dayjs from 'dayjs';
export type TaskContainerPropsType =
  | 'all'
  | 'today'
  | 'upcoming'
  | 'completed'
  | 'project'
  | 'custom';
interface ITaskContainerProps {
  entityId?: string;
  type?: TaskContainerPropsType;
}
export const TaskContainer = ({
  type = 'today',
  entityId,
}: ITaskContainerProps) => {
  const paginationDefaults = {
    limit: 20,
    skip: 0,
  };
  const filterInput = useMemo(() => {
    return getFilterValues({
      type,
      additionalInfo: {
        projectId: entityId ? (entityId as string) : null,
      },
      pagination: {
        ...paginationDefaults,
      },
    });
  }, [type, entityId]);
  const {
    data: rawTasksData,
    isFetching: tasksFetching,
    refetch: refetchTasks,
  } = useApi.useGetTasksQuery({
    input: {
      ...filterInput,
    },
  });
  const [updateTask, updateTaskStatus] = useApi.useUpdateTaskMutation();
  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedEditTask, setSelectedEditTask] = useState<
    GetTasksQuery['getTasks'][number] | null
  >(null);
  const tasks: IFormattedTask[] = useMemo(() => {
    if (rawTasksData) {
      return getFormattedTasks(rawTasksData.getTasks);
    }
    return [];
  }, [rawTasksData]);
  const title = useMemo(() => {
    if (type) {
      return TaskTitleMap[type].title;
    }
    return '';
  }, [type]);

  const handleAddTaskClick = () => {
    setShowAddTask(true);
  };

  const handleAddSuccess = () => {
    refetchTasks?.();
    setShowAddTask(false);
  };

  const handleCancel = () => {
    setShowAddTask(false);
  };

  const handleTaskEdit = (taskData: GetTasksQuery['getTasks'][number]) => {
    setSelectedEditTask(taskData);
  };

  const handleTaskComplete = (id: string) => {
    updateTask?.({
      task: {
        id,
        is_completed: true,
      },
    })
      .unwrap()
      .then(() => {
        refetchTasks?.();
      })
      .catch((error) => {
        MSNotification('error', error.message);
      });
  };

  const handleEditCancel = () => {
    setSelectedEditTask(null);
  };

  const handleEditSuccess = () => {
    refetchTasks?.();
    setSelectedEditTask(null);
  };
  const dueDate = useMemo(() => {
    if (type === 'today') {
      return dayjs();
    } else if (type === 'upcoming') {
      return dayjs().add(1, 'day');
    }
    return null;
  }, [type]);
  return (
    <>
      <div className="task-container xs:min-w-48 sm:min-w-96 md:min-w-[600px] lg:min-w-[720px] max-w=[1440px] p-8">
        <Typography className="text-xl font-semibold">{title}</Typography>
        <div className="mt-4">
          <MSSpinner loading={tasksFetching}>
            {tasks.length ? (
              <div className="flex flex-col gap-4">
                {tasks.map((task) => {
                  return (
                    <React.Fragment key={task.id}>
                      {selectedEditTask && task.id === selectedEditTask.id ? (
                        <div className="mt-4">
                          <EditTask
                            taskData={selectedEditTask}
                            onEditSuccess={handleEditSuccess}
                            onCancel={handleEditCancel}
                          />
                        </div>
                      ) : (
                        <TaskCard
                          key={task.id}
                          data={task}
                          onTaskComplete={handleTaskComplete}
                          onTaskEdit={handleTaskEdit}
                          type={type}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            ) : (
              'No Tasks'
            )}
            {showAddTask ? (
              <div className="mt-4">
                <AddTask
                  onAddSuccess={handleAddSuccess}
                  onCancel={handleCancel}
                  initialValues={{
                    project_id: entityId || null,
                    due_date: dueDate,
                  }}
                />
              </div>
            ) : (
              <>
                {type !== 'completed' ? (
                  <div className="mt-4">
                    <MSButton
                      icon={<PlusOutlined />}
                      type="primary"
                      onClick={handleAddTaskClick}
                    >
                      Add
                    </MSButton>
                  </div>
                ) : (
                  ''
                )}
              </>
            )}
          </MSSpinner>
        </div>
      </div>
    </>
  );
};
