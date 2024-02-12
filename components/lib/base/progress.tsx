import { Progress } from "antd";
import React from "react";

type ProgressType = "circle" | "line" | "dashboard" | undefined;

interface MSProgressProps {
  type?: ProgressType;
  className?: string | undefined;
  percent?: number;
  strokeColor?: string;
  success?: { percent: number };
  format?: (percent: any) => React.JSX.Element | string;
  size?: number | undefined;
}
export const MSProgress = ({
  type,
  className,
  percent,
  strokeColor,
  format,
  ...other
}: MSProgressProps) => {
  return (
    <>
      <Progress
        type={type}
        percent={percent}
        className={className}
        format={format}
        {...other}
      />
    </>
  );
};
