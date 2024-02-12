import { Form, FormItemProps, Radio, Space } from "antd";
import { MSProps, MSRadioButton } from "@/components";
import { MSRadio } from "../radio";
import { Fragment } from "react";

export interface IMSFormRadioOptionProps {
  options?: any[];
  bindKey?: string;
  bindLabel?: string;
}
interface IMSFormRadioProps extends FormItemProps {
  renderType?: "button" | "normal";
  direction?: "horizontal" | "vertical";
  radioProps: MSProps<IMSFormRadioOptionProps>;
}
export const MSFormRadio = ({
  permissions,
  name,
  radioProps = {},
  className,
  label,
  renderType = "normal",
  direction,
  ...other
}: MSProps<IMSFormRadioProps>) => {
  const { options = [], bindKey = "key", bindLabel = "label" } = radioProps;
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <Radio.Group>
        <Space direction={direction}>
          {options?.map((option: any) => (
            <Fragment key={option[bindKey]}>
              {renderType === "normal" ? (
                <MSRadio
                  key={option[bindKey]}
                  value={option[bindKey]}
                  label={option[bindLabel]}
                  {...option}
                  permissions={permissions}
                />
              ) : (
                <MSRadioButton
                  key={option[bindKey]}
                  value={option[bindKey]}
                  label={option[bindLabel]}
                  {...option}
                  permissions={permissions}
                />
              )}
            </Fragment>
          ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};
