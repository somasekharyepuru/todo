export interface ISideMenuItem {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: ISideMenuItem[];
  type?: string;
  url?: string;
  className?: string;
  disabled?: boolean;
  labelClassName?: string;
}
