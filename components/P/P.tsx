import styles from './P.module.css';
import { PProps } from './P.props';
import cn from 'classnames';

export const P = ({
  children,
  size = 'medium',
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.large]: size == 'large',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
