import Modal from 'src/components/common/Modal';
import Button from '../Button';
import { styles } from './styles';

interface Props {
  title: string;
  message?: string;
  okText?: string;
  cancelText?: string;
  onOk: () => void;
  onCancel?: () => void;
}

function Dialog(props: Props) {
  const {
    title,
    message,
    okText = 'OK',
    cancelText = 'Cancel',
    onOk,
    onCancel,
  } = props;

  const handleOk = () => {
    onOk();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <Modal>
      <h1>{title}</h1>
      {message && <div style={styles.message}>{message}</div>}
      <div style={styles.buttonsRow}>
        <Button text={okText} onClick={handleOk} />
        {onCancel && (
          <>
            <div style={{ width: 20 }} />
            <Button text={cancelText} onClick={handleCancel} />
          </>
        )}
      </div>
    </Modal>
  );
}

export default Dialog;
