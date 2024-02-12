import { MSProps } from "@/components";
export const MSFormLabel = ({ className, label, hidden }: MSProps<any>) => {
  if (hidden) return null;
  return <div className={`text-base mb-1 ${className}`}>{label}</div>;
};
