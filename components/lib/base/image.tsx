import { Image, ImageProps } from "antd";
import { MSProps } from "../interfaces";

export const MSImage = ({
  className,
  permissions,
  children,
  preview = false,
  ...other
}: MSProps<ImageProps>) => {
  return <Image className={className} preview={preview} {...other} />;
};
