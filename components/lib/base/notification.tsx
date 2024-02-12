import { notification } from "antd";
type NotificationType = "success" | "info" | "warning" | "error";
const DEFAULT_DURATION = 3;
export const MSNotification = (
  type: NotificationType,
  message: string,
  description?: string,
  duration: number = DEFAULT_DURATION
) => {
  notification[type]({
    message,
    description,
    duration: duration,
  });
};
