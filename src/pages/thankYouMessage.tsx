import { ThankYouMessage } from '@/components/Forms/ThankYouMessage/ThankYouMessage';
import styles from '../styles/page.module.css';

const ThankYou = () => {
  return (
    <div className={styles.main}>
      <ThankYouMessage />
    </div>
  );
};

export default ThankYou;
