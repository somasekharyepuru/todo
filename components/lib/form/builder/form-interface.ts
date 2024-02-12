import type { FormItemProps, Rule } from "antd/es/form";
import type { InputProps, TextAreaProps } from "antd/es/input";
import { DocumentNode } from "graphql";
import { IMSCheckBoxProps } from "../checkbox";
import { IMSSelectProps } from "../select";
import { MSProps } from "@/components";
import { IMSFormRadioOptionProps } from "../wrappers";
import { ButtonProps } from "antd";

export interface IForm {
  globalConfig?: IFormGlobalConfig;
  fields: IFormField[];
  buttons?: IFormButton[];
}
export interface IFormButton {
  key: string;
  type: "button" | "submit" | "reset";
  label: string;
  buttonProps?: ButtonProps;
  className?: string;
}

interface IFormGlobalConfig {
  gridSpacing?: number;
  name: string;
  layout?: "horizontal" | "vertical" | "inline";
}

export interface IFormField extends FormItemProps {
  key: string;
  label?: string;
  type: string;
  disabled?: boolean;
  checkBoxProps?: IMSCheckBoxProps;
  selectProps?: IMSSelectProps;
  validations?: Rule[];
  dependentConfig?: IFormDependentConfig[];
  inputProps?: MSProps<InputProps>;
  className?: string;
  radioProps?: MSProps<IMSFormRadioOptionProps>;
  textAreaProps?: MSProps<TextAreaProps>;
  placeholder?: string;
  gridStyle?: IFormItemStyle;
  child?: IFormField[];
}

export interface IFormItemStyle {
  gridSpacing?: number;
}

export interface IFormInputConfig {
  placeHolder?: string;
  prefixIcon?: React.ReactNode;
}

export interface IFormTextAreaConfig {
  rows?: number;
}

export interface IFormSelectConfig {
  bindLabel: string;
  bindKey: string;
  optionType: "api" | "manual";
  options?: any[];
  apiConfig?: IFormSelectAPIConfig;
  multiple?: boolean;
}

export interface IFormSelectAPIConfig {
  queryType: "rest" | "graphQl";
  graphQlConfig?: IFormSelectAPIGraphqlConfig;
  restConfig?: any;
}

export interface IFormSelectAPIGraphqlConfig {
  queryName: DocumentNode;
  variables?: { [key: string]: any };
  formatter?: (data: any) => any;
}

export interface IFormDependentConfig {
  key: string;
  clearOnChange?: boolean;
  queryOnChange?: boolean;
  queryWithOutDependentData?: boolean;
  updateVariables?: (newValue: any, previousVariables: any) => any;
  render?: IFormDependentRenderConfig;
}

export interface IFormDependentRenderConfig {
  op: string;
  value: any | any[];
}
