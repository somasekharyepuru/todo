import { StepProps, Steps, StepsProps } from "antd";
import { useMemo } from "react";
import { MSProps } from "../interfaces";
export interface IMSStepsProps extends Omit<StepsProps, "items"> {
  items: IStepItem[];
}

export interface IStepItem extends StepProps {
  permissions?: string[];
}

export const MSSteps = ({
  className,
  permissions,
  children,
  items,
  ...other
}: MSProps<IMSStepsProps>) => {
  // TODO: WRITE LOGIC FOR EACH ITEM PERMISSIONS BY USING USE MEMO AND ENHANCED CONFIG
  const enhancedItems = useMemo(() => {
    return items;
  }, [items]);
  return <Steps items={enhancedItems} className={className} {...other} />;
};
