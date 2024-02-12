import { CopyOutlined } from '@ant-design/icons';
import { message } from 'antd';
interface ICopyTextProps {
  value: string;
}
export const CopyText = ({ value }: ICopyTextProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  if (!value) {
    return;
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    messageApi.open({
      type: 'success',
      duration: 2,
      content: 'copied',
    });
  };
  return (
    <div className="cursor-pointer" onClick={handleCopy}>
      {contextHolder}

      <CopyOutlined />
    </div>
  );
};
