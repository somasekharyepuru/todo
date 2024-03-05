import { GetTasksQuery } from '@/api';
import { Typography } from 'antd';
import React from 'react';
import { MSButton, MSCard, MSCheckBox, MSRadio, MSRadioButton } from '..';
import { TickIcon } from '@/utils';
import { EditOutlined } from '@ant-design/icons';
export interface ITaskCardProps {
  data: GetTasksQuery['getTasks'][number];
  onTaskComplete?: (id: string) => void;
  onTaskEdit?: (taskData: GetTasksQuery['getTasks'][number]) => void;
}
export const TaskCard = ({
  data,
  onTaskComplete,
  onTaskEdit,
}: ITaskCardProps) => {
  const handleCompleteTaskClick = () => {
    onTaskComplete?.(data.id);
  };
  const handleTaskEdit = () => {
    onTaskEdit?.(data);
  };
  return (
    <>
      <MSCard
        styles={{
          body: {
            padding: 8,
          },
        }}
      >
        <div className="group flex justify-between">
          <div className="flex gap-2">
            <div className="flex items-center">
              <div
                className="task--circle flex items-center relative w-4 h-4 cursor-pointer border border-gray-600 border-solid rounded-full"
                onClick={handleCompleteTaskClick}
              >
                <TickIcon />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Typography className="font-semibold">{data?.title}</Typography>
              <Typography className="text-xs">{data?.description}</Typography>
            </div>
          </div>
          <div className="flex ">
            <MSButton
              type="text"
              className="hidden group-hover:block"
              onClick={handleTaskEdit}
            >
              <EditOutlined />
            </MSButton>
          </div>
        </div>
      </MSCard>
    </>
  );
};
