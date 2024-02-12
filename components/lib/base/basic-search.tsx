import { Input } from "antd";
import type { SearchProps } from "antd/es/input";
import { useMemo, useState } from "react";
import { debounce } from "lodash";
import { MSProps } from "../interfaces";

const { Search } = Input;
interface IMSBasicSearchProps extends SearchProps {
  value?: string;
  onValueUpdate?: (value: string) => void;
}
export const MSBasicSearch = ({
  className,
  permissions,
  allowClear = true,
  children,
  onValueUpdate,
  ...other
}: MSProps<IMSBasicSearchProps>) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    onValueUpdate?.(value);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 500);
  }, []);
  const handleInputChange = (value) => {
    setSearchValue(value);
    debouncedSearch(value);
  };
  return (
    <Search
      value={searchValue}
      allowClear={allowClear}
      className={className}
      onChange={(e) => handleInputChange(e.target.value)}
      onSearch={(value) => handleSearch(value)}
      {...other}
    />
  );
};
