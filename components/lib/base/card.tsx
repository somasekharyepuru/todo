import { Card } from "antd";
import type { CardProps } from "antd/es/card";
import { MSProps } from "../interfaces";
export const MSCard = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<CardProps>) => {
  return (
    <Card className={className} {...other}>
      {children}
    </Card>
  );
};
