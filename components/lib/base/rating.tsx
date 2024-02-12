import { Rate, RateProps } from "antd";
import { MSProps } from "../interfaces";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export const MSRating = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<RateProps>) => {
  return <Rate className={className} tooltips={desc} {...other} />;
};
