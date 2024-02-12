import { Input } from "antd";
import type { SearchProps } from "antd/es/input";
import { MSProps } from "../interfaces";
const { Search } = Input;
export const MSSearch = ({
  className,
  permissions,
  allowClear = true,
  children,
  ...other
}: MSProps<SearchProps>) => {
  return <Search allowClear={allowClear} className={className} {...other} />;
};
