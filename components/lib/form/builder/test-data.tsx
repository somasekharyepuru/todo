import { IForm } from './form-interface';

export const TEST_FORM: IForm = {
  globalConfig: {
    name: 'test-form',
  },
  fields: [
    {
      key: 'remember_me',
      type: 'checkbox',
      checkBoxProps: {
        label: 'Remember Me',
      },
    },
    {
      key: 'gender',
      type: 'radio',
      label: 'Gender',
      dependentConfig: [
        {
          key: 'remember_me',
          render: {
            op: 'eq',
            value: true,
          },
        },
      ],
      radioProps: {
        bindKey: 'key',
        bindLabel: 'label',
        options: [
          {
            key: 'male',
            label: 'Male',
          },
          {
            key: 'female',
            label: 'Female',
          },
        ],
      },
    },
    {
      key: 'description',
      type: 'textArea',
      label: 'Description',
      dependentConfig: [
        {
          key: 'gender',
          render: {
            op: 'eq',
            value: 'male',
          },
        },
      ],
    },
    {
      key: 'hotelGroups',
      label: 'Hotel Groups',
      type: 'select',
      dependentConfig: [
        {
          key: 'gender',
          render: {
            op: 'eq',
            value: 'female',
          },
        },
      ],
      selectProps: {
        bindLabel: 'name',
        mode: 'multiple',
        bindKey: 'id',
        placeholder: 'Select Hotel Groups',
        options: [
          {
            id: '123',
            name: 'Group 1',
          },
          {
            id: '1234',
            name: 'Group 2',
          },
        ],
      },
    },
  ],
  buttons: [
    {
      key: 'submit',
      type: 'submit',
      label: 'Login',
      className: 'login-form-button w-full bg-blue hover',
    },
  ],
};
