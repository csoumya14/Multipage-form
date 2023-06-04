import { FC, ReactNode } from 'react';
import styles from './Field.module.scss';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface FieldProps {
  id: string;
  label: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  children: ReactNode;
}
export const Field: FC<FieldProps> = ({ id, label, error, children }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {children}
      {error && <small className="error">{error.message?.toString()}</small>}
    </div>
  );
};
