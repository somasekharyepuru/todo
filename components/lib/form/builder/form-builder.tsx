import React, { useEffect, useRef, useState } from "react";
import { IForm } from "./form-interface";
import { Form, FormInstance } from "antd";
import { MSFormFieldsWrapper } from "./form-fields-wrapper";
import { MSForm } from "../form";

interface Props {
  config: IForm;
  onEvent?: (event: any) => void;
  loadingState?: boolean;
  customComponents?: { [key: string]: any };
  componentData?: any;
  children?: React.ReactNode;
  initialValues?: { [key: string]: any };
  onFormLoad?: (form: FormInstance) => void;
}

export const MSFormBuilder = ({
  config,
  onEvent,
  loadingState,
  customComponents,
  componentData,
  children,
  initialValues,
  onFormLoad,
}: Props) => {
  const [changedValues, setChangedValues] = useState<any>(null);
  const [form] = Form.useForm();
  const handleSubmit = (e: any): void => {
    onEvent?.({
      type: "submit",
      data: e,
    });
  };

  const handleSubmitFailed = (e: any): void => {
    // TODO: HANDLE SUBMIT FAIL HERE
  };

  const handleFormEvents = (e: any): void => {
    onEvent?.(e);
  };

  const handleFormLoad = () => {
    onFormLoad?.(form);
  };

  useEffect(() => {
    handleFormLoad();
    return () => {};
  }, []);

  const handleValueChanges = (changedValues: any, allValues: any) => {
    setChangedValues(changedValues);
    // handle child true values
  };
  return (
    <MSForm
      initialValues={initialValues}
      name={config.globalConfig?.name}
      onFinish={handleSubmit}
      onFinishFailed={handleSubmitFailed}
      autoComplete="off"
      form={form}
      layout={config.globalConfig?.layout || "vertical"}
      onValuesChange={handleValueChanges}
    >
      <MSFormFieldsWrapper
        config={config}
        componentData={componentData}
        formInstance={form}
        loadingState={loadingState}
        customComponents={customComponents}
        onEvent={handleFormEvents}
        changedValues={changedValues}
      />
    </MSForm>
  );
};
