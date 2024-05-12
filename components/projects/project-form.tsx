import { Form } from 'antd';
import { useEffect } from 'react';
import { MSButton, MSForm, MSFormInput, MSFormTextArea } from '..';
export interface IProjectForm {
  name: string;
  description: string;
}
export interface IProjectFormProps {
  page: 'ADD' | 'EDIT';
  onSubmit: (values: IProjectForm) => void;
  onCancel?: () => void;
  initialValues?: IProjectForm;
  loading?: boolean;
}

export const ProjectForm = ({
  page,
  onSubmit,
  initialValues,
  onCancel,
  loading,
}: IProjectFormProps) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues]);

  const handleSubmit = async (values: IProjectForm) => {
    await form.validateFields();
    const postData: IProjectForm = values;
    onSubmit?.(postData);
  };
  const handleCancel = () => {
    onCancel?.();
  };
  return (
    <>
      <MSForm
        name="ProjectForm"
        initialValues={initialValues}
        form={form}
        onFinish={handleSubmit}
        className="mt-2"
      >
        <MSFormInput
          name={'name'}
          className="mb-2"
          inputProps={{
            placeholder: 'Name',
          }}
          rules={[
            {
              required: true,
              message: 'Please input name',
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
          rules={[
            {
              required: true,
              message: 'Please input description',
            },
          ]}
        />
        <div className="mt-4 flex gap-2 justify-end">
          <MSButton onClick={handleCancel}>Cancel</MSButton>
          <MSButton type="primary" htmlType="submit">
            Submit
          </MSButton>
        </div>
      </MSForm>
    </>
  );
};
