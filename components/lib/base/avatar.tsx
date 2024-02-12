import { Avatar, AvatarProps } from "antd";
import { MSProps } from "../interfaces";
export const MSAvatar = ({
  className,
  permissions,
  ...other
}: MSProps<AvatarProps>) => {
  return <Avatar className={className} {...other} />;
};
