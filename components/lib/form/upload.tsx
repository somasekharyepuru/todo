import { Upload, UploadProps } from "antd";
import { MSProps } from "../interfaces";
export const MSUpload = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<UploadProps>) => {
  return (
    <Upload className={className} {...other}>
      {children}
    </Upload>
  );
};
