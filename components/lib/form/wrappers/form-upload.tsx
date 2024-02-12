import { Form, FormItemProps, Upload, UploadProps } from "antd";
import { MSUpload } from "../upload";
import { MSProps } from "../../interfaces";
interface IMSFormUploadProps extends FormItemProps {
  uploadProps?: UploadProps;
}
export const MSFormUpload = ({
  permissions,
  name,
  valuePropName = "fileList",
  uploadProps,
  className,
  children,
  ...other
}: MSProps<IMSFormUploadProps>) => {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList?.map((file: any) => {
      return {
        ...file,
        status: "done",
      };
    });
  };

  return (
    <Form.Item
      name={name}
      valuePropName={valuePropName}
      className={className}
      getValueFromEvent={normFile}
      {...other}
    >
      <MSUpload permissions={permissions} {...uploadProps}>
        {children}
      </MSUpload>
    </Form.Item>
  );
};
