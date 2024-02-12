import { Col, FormInstance } from "antd";
import { useEffect, useState } from "react";
import { FORM_COMPONENTS_MAP } from "./components-mapping";
import { IFormDependentConfig, IFormField } from "./form-interface";
import {
  getDependentChangedValueFields,
  isDependentRulesSatisfied,
} from "./service";

interface Props {
  fieldConfig: IFormField;
  customComponents?: { [key: string]: any };
  componentData?: any;
  formInstance?: FormInstance<any>;
  changedValues?: any;
}
export const MSFormField = ({
  fieldConfig,
  customComponents,
  componentData,
  formInstance,
  changedValues,
}: Props) => {
  const { dependentConfig } = fieldConfig;
  const [shouldRender, setShouldRender] = useState(true);
  let componentConfig: any = null;
  if (customComponents?.[fieldConfig?.type]) {
    componentConfig = {
      component: customComponents[fieldConfig?.type],
    };
  } else if (FORM_COMPONENTS_MAP[fieldConfig?.type]) {
    componentConfig = FORM_COMPONENTS_MAP[fieldConfig?.type];
  }
  const handleDependentField = () => {
    const isRender = isDependentRulesSatisfied(
      fieldConfig,
      formInstance?.getFieldsValue(true)
    );
    if (!isRender) {
      formInstance?.setFieldsValue({
        [fieldConfig?.key]: null,
      });
    }
    setShouldRender(isRender);
    const changedDependentFields = getDependentChangedValueFields(
      dependentConfig || [],
      changedValues
    );
    dependentConfig?.forEach((dependent: IFormDependentConfig) => {
      if (changedDependentFields.includes(dependent?.key)) {
        if (dependent.clearOnChange) {
          formInstance?.setFieldsValue({
            [fieldConfig?.key]: null,
          });
        }
      }
    });
  };
  useEffect(() => {
    if (fieldConfig && formInstance && dependentConfig?.length) {
      handleDependentField();
    }
  }, [fieldConfig, formInstance, changedValues]);
  if (!componentConfig) {
    console.error("No component matched", fieldConfig.type);
    return "";
  }
  let props = { fieldConfig };
  if (componentConfig?.props) {
    props = {
      ...props,
      ...componentConfig?.props,
    };
  }
  if (componentData) {
    props = {
      ...props,
      ...componentData,
    };
  }
  const { component: Component } = componentConfig;
  const formItemGridWidth = fieldConfig?.gridStyle?.gridSpacing
    ? fieldConfig?.gridStyle?.gridSpacing * 2
    : 24;

  const dumbTypes = ["radio", "timeRange", "numberGroup"];
  const handleOnChange = () => {
    if (fieldConfig?.child) {
      fieldConfig.child.forEach((field) => {
        if (dumbTypes.includes(field?.type)) {
          formInstance?.setFieldsValue({
            [field?.key]: true,
          });
        }
      });
    }
  };
  return (
    <Col xs={24} md={formItemGridWidth}>
      <Component
        name={fieldConfig?.key}
        rules={fieldConfig?.validations}
        {...props.fieldConfig}
        hidden={fieldConfig?.hidden || !shouldRender}
        onChange={handleOnChange}
      />
    </Col>
  );
};
