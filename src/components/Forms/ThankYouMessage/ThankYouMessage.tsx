import { FC } from 'react';
import styles from './ThankYouMessage.module.scss';
// ...

interface ThankYouMessageProps {}

export const ThankYouMessage: FC<ThankYouMessageProps> = () => {
  return <p className={styles.para}>Thank you for your subscription</p>;
};
