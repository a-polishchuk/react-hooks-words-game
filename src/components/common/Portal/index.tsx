import { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('portal-root');

interface Props {
  children: ReactNode;
}

function Portal({ children }: Props) {
  const domNode = useMemo(() => {
    return document.createElement('div');
  }, []);

  useEffect(() => {
    modalRoot!.appendChild(domNode);

    return () => {
      modalRoot!.removeChild(domNode);
    };
  }, [domNode]);

  return ReactDOM.createPortal(children, domNode);
}

export default Portal;
