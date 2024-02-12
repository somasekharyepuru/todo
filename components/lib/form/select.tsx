import { Select, SelectProps } from "antd";
import { MSProps } from "../interfaces";
export interface IMSSelectProps extends Omit<SelectProps, "options"> {
  options?: any[];
  bindKey?: string;
  bindLabel?: string;
}
export const MSSelect = ({
  bindKey = "key",
  bindLabel = "label",
  className,
  permissions,
  children,
  options,
  ...other
}: MSProps<IMSSelectProps>) => {
  const filterOptions = (inputValue: any, option: any) => {
    return (
      (option?.[bindLabel] as string)
        ?.toLowerCase?.()
        .indexOf(inputValue.toLowerCase()) !== -1
    );
  };
  return (
    <Select
      className={className}
      fieldNames={{
        label: bindLabel,
        value: bindKey,
      }}
      options={options}
      {...other}
      filterOption={filterOptions}
    ></Select>
  );
};
