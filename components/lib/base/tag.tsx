import { TagProps, Tag } from "antd";
import { MSProps } from "../interfaces";

export const MSTag = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<TagProps>) => {
  return (
    <Tag className={className} {...other}>
      {children}
    </Tag>
  );
};
