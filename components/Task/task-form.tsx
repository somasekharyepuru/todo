import { Form } from 'antd';
import { useEffect } from 'react';
import {
  MSButton,
  MSDatePicker,
  MSForm,
  MSFormCheckBox,
  MSFormDatePicker,
  MSFormInput,
  MSFormSelect,
  MSFormTextArea,
} from '..';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { IFormattedTaskForm, formatTaskFormDataToAPI } from './service';
dayjs.extend(customParseFormat);
export interface ITaskForm {
  title: string;
  description?: string | null;
  due_date?: dayjs.Dayjs | null;
  priority?: string | null;
  is_completed?: boolean | null;
  project_id?: string | null;
}
export interface ITaskFormProps {
  page: 'ADD' | 'EDIT';
  onSubmit: (values: IFormattedTaskForm) => void;
  onCancel?: () => void;
  initialValues?: ITaskForm;
  loading?: boolean;
}

export const TaskForm = ({
  page,
  onSubmit,
  initialValues,
  onCancel,
  loading,
}: ITaskFormProps) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues]);

  const handleSubmit = (values) => {
    const postData: IFormattedTaskForm = formatTaskFormDataToAPI(values);
    onSubmit?.(postData);
  };

  const handleCancel = () => {
    onCancel?.();
  };
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < dayjs().startOf('day');
  };
  return (
    <>
      <MSForm
        name="taskForm"
        initialValues={initialValues}
        form={form}
        onFinish={handleSubmit}
      >
        <MSFormInput
          name={'title'}
          className="mb-2"
          inputProps={{
            placeholder: 'Title',
          }}
          rules={[
            {
              required: true,
              message: 'Please input title',
            },
          ]}
        />
        <MSFormTextArea
          name={'description'}
          className="mb-2"
          textAreaProps={{
            placeholder: 'Description',
            rows: 1,
          }}
        />
        <div className="flex gap-4">
          <MSFormDatePicker
            name={'due_date'}
            className="w-full mb-2"
            datePickerProps={{
              disabledDate,
              format: 'DD-MM-YYYY',
            }}
          />
          <MSFormSelect
            name={'priority'}
            className="w-full mb-2"
            selectProps={{
              placeholder: 'Priority',
              options: [],
            }}
          />
          <MSFormSelect
            name={'project_id'}
            className="w-full mb-2"
            selectProps={{
              placeholder: 'Project',
              options: [],
            }}
          />
          <MSButton type="text" onClick={handleCancel}>
            Cancel
          </MSButton>
          <MSButton
            htmlType="submit"
            type="text"
            className="text-primary"
            loading={loading}
          >
            {page === 'ADD' ? 'Add' : 'Update'}
          </MSButton>
          {/* <MSFormCheckBox name={'is_completed'} /> */}
        </div>
      </MSForm>
    </>
  );
};
