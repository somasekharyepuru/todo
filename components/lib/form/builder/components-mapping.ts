import {
  MSFormInput,
  MSFormPassword,
  MSFormCheckBox,
  MSFormRadio,
  MSFormTextArea,
  MSFormSelect,
  MSFormTimePicker,
  MSFormLabel,
  MSFormInputNumber,
} from "../wrappers";

export const FORM_COMPONENTS_MAP: { [key: string]: any } = {
  text: {
    component: MSFormInput,
  },
  password: {
    component: MSFormPassword,
  },
  checkbox: {
    component: MSFormCheckBox,
  },
  radio: {
    component: MSFormRadio,
  },
  textArea: {
    component: MSFormTextArea,
  },
  select: {
    component: MSFormSelect,
  },
  time: {
    component: MSFormTimePicker,
  },
  label: {
    component: MSFormLabel,
  },
  number: {
    component: MSFormInputNumber,
  },
  timeRange: {
    component: MSFormLabel,
  },
  numberGroup: {
    component: MSFormLabel,
  },
};
