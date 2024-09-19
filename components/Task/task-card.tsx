import { TickIcon } from '@/utils';
import { CalendarOutlined, EditOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { MSButton, MSCard } from '..';
import { IFormattedTask } from './service';
import { TaskContainerPropsType } from './taskContainer';
export interface ITaskCardProps {
  data: IFormattedTask;
  onTaskComplete?: (id: string) => void;
  onTaskEdit?: (taskData: IFormattedTask) => void;
  type?: TaskContainerPropsType;
}
export const TaskCard = ({
  data,
  onTaskComplete,
  onTaskEdit,
  type,
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
        className="transition-all duration-300 hover:shadow-lg"
      >
        <div className="group flex justify-between items-center">
          <div className="flex gap-2">
            {type != 'completed' ? (
              <div className="flex items-center">
                {/* <div className="border-priority_low border-priority_medium border-priority_high"></div> */}
                <div
                  className={`task--circle flex items-center relative w-4 h-4 cursor-pointer border ${priorityColor} border-solid rounded-full`}
                  onClick={handleCompleteTaskClick}
                >
                  <TickIcon />
                </div>
              </div>
            ) : (
              ''
            )}
            <div className="flex flex-col gap-1">
              <Typography className="font-semibold">{data?.title}</Typography>
              <Typography className="text-xs">{data?.description}</Typography>
              <div className="flex w-full gap-4">
                {data.due_date ? (
                  <div className="flex gap-1">
                    <CalendarOutlined />
                    <Typography
                      className={` ${data?.isOverdue ? 'text-danger' : ''}`}
                    >
                      {data.dueDateFormatted}
                    </Typography>
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
          {type != 'completed' ? (
            <div className="flex ">
              <MSButton
                type="text"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={handleTaskEdit}
              >
                <EditOutlined />
              </MSButton>
            </div>
          ) : (
            ''
          )}
        </div>
      </MSCard>
    </>
  );
};
