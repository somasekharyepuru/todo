import { FormInstance, Row } from "antd";
import { MSFormActionHandler } from "./form-action-handler";
import { MSFormField } from "./form-field";
import { IForm } from "./form-interface";

interface Props {
  config: IForm;
  onEvent?: (event: any) => void;
  loadingState?: boolean;
  customComponents?: { [key: string]: any };
  componentData?: any;
  children?: React.ReactNode;
  formInstance?: FormInstance<any>;
  changedValues?: any;
}

export const MSFormFieldsWrapper = ({
  config,
  formInstance,
  onEvent,
  loadingState,
  customComponents,
  componentData,
  changedValues,
}: Props) => {
  return (
    <>
      <Row gutter={16}>
        {config.fields.map((fieldData) => (
          <MSFormField
            key={fieldData?.key}
            fieldConfig={fieldData}
            customComponents={customComponents}
            componentData={componentData}
            formInstance={formInstance}
            changedValues={changedValues}
          />
        ))}
      </Row>
      <div className="flex justify-end gap-6">
        {config?.buttons?.map((buttonData) => (
          <MSFormActionHandler
            key={buttonData?.key}
            buttonConfig={buttonData}
            loadingState={loadingState}
            formInstance={formInstance}
            onEvent={onEvent}
          />
        ))}
      </div>
    </>
  );
};
