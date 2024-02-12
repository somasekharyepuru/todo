import { ReactNode } from "react";

export type MSProps<P = unknown> = P & {
  permissions?: string[] | null;
  className?: string;
  children?: ReactNode | undefined;
};
