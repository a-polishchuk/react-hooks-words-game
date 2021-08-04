import { ReactNode, Children, Fragment } from 'react';
import { styles } from './styles';

interface Props {
  children: ReactNode;
}

function RowLayout({ children }: Props) {
  const array = Children.toArray(children);

  return (
    <div style={styles.root}>
      {array.map((child, index) => {
        if (index === array.length - 1) {
          return child;
        }
        return (
          <Fragment key={index}>
            {child}
            <div style={{ width: 10 }} />
          </Fragment>
        );
      })}
    </div>
  );
}

export default RowLayout;
