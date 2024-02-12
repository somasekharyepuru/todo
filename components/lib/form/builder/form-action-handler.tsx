import { Button, Form, FormInstance } from "antd";
import { IFormButton } from "./form-interface";

interface Props {
  buttonConfig: IFormButton;
  loadingState?: boolean;
  formInstance?: FormInstance<any>;
  children?: React.ReactNode;
  onEvent?: (e: any) => void;
}

export const MSFormActionHandler = ({
  buttonConfig,
  loadingState,
  formInstance,
  onEvent,
}: Props) => {
  const handleButtonClick = () => {
    if (buttonConfig?.type !== "submit") {
      onEvent?.({
        type: "action_button_click",
        key: buttonConfig?.key,
        label: buttonConfig?.label,
      });
    }
  };
  const submittableButtons = ["submit"];
  return (
    <Form.Item>
      <Button
        type={buttonConfig?.buttonProps?.type || "primary"}
        htmlType={buttonConfig?.type}
        className={buttonConfig?.className || "bg-blue"}
        onClick={handleButtonClick}
        loading={
          submittableButtons?.includes(buttonConfig?.type)
            ? loadingState
            : false
        }
        {...buttonConfig.buttonProps}
      >
        {buttonConfig?.label}
      </Button>
    </Form.Item>
  );
};
