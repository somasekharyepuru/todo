import { MSProps } from "@/components";
import { Modal, ModalProps } from "antd";
import { ReactNode } from "react";
export interface IMSModalProps extends ModalProps {
  icon?: ReactNode;
}
export const MSModal = ({
  className,
  permissions,
  children,
  icon,
  title,
  ...other
}: MSProps<IMSModalProps>) => {
  return (
    <Modal
      title={
        icon ? (
          <div className="flex gap-4">
            {icon}
            <div>{title}</div>
          </div>
        ) : (
          title
        )
      }
      className={className}
      {...other}
    >
      {icon ? <div className="ml-10">{children}</div> : children}
    </Modal>
  );
};
