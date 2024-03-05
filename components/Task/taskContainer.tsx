import { GetTasksQuery, useGetTasksQuery, useUpdateTaskMutation } from '@/api';
import React, { useMemo, useState } from 'react';
import { MSButton, MSNotification, MSSpinner } from '..';
import { TaskCard } from './task-card';
import { Typography } from 'antd';
import { TaskTitleMap } from './title-map';
import { PlusOutlined } from '@ant-design/icons';
import { AddTask } from './add-task';
import { EditTask } from './edit-task';
export type TaskContainerPropsType =
  | 'today'
  | 'upcoming'
  | 'completed'
  | 'project'
  | 'custom';
interface ITaskContainerProps {
  type: TaskContainerPropsType;
}
export const TaskContainer = ({ type }: ITaskContainerProps) => {
  const {
    data: rawTasksData,
    isFetching: tasksFetching,
    refetch: refetchTasks,
  } = useGetTasksQuery();
  const [updateTask, updateTaskStatus] = useUpdateTaskMutation();
  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedEditTask, setSelectedEditTask] = useState<
    GetTasksQuery['getTasks'][number] | null
  >(null);
  const tasks = useMemo(() => {
    // TODO: WRITE FORMATTER HERE FOR TASK DATA
    if (rawTasksData) {
      return rawTasksData.getTasks;
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
                    <>
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
                        />
                      )}
                    </>
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
                />
              </div>
            ) : (
              <div className="mt-4">
                <MSButton
                  icon={<PlusOutlined />}
                  type="primary"
                  onClick={handleAddTaskClick}
                >
                  Add
                </MSButton>
              </div>
            )}
          </MSSpinner>
        </div>
      </div>
    </>
  );
};
