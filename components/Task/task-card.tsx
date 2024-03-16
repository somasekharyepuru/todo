import { TickIcon } from '@/utils';
import { CalendarOutlined, EditOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { MSButton, MSCard } from '..';
import { IFormattedTask } from './service';
export interface ITaskCardProps {
  data: IFormattedTask;
  onTaskComplete?: (id: string) => void;
  onTaskEdit?: (taskData: IFormattedTask) => void;
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
  const priorityColor = data?.priority
    ? `border-priority_${data.priority}`
    : 'border-gray-600';
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
                className={`task--circle flex items-center relative w-4 h-4 cursor-pointer border ${priorityColor} border-solid rounded-full`}
                onClick={handleCompleteTaskClick}
              >
                <TickIcon />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Typography className="font-semibold">{data?.title}</Typography>
              <Typography className="text-xs">{data?.description}</Typography>
              <div className="flex w-full gap-4">
                {data.due_date ? (
                  <div className="flex gap-1">
                    <CalendarOutlined />
                    <Typography>{data.dueDateFormatted}</Typography>
                  </div>
                ) : (
                  ''
                )}
                {data.project?.id ? (
                  <div>
                    <Typography>#{data.project?.name}</Typography>
                  </div>
                ) : (
                  ''
                )}
              </div>
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
