import { ThankYouMessage } from '@/components/Forms/ThankYouMessage/ThankYouMessage';
import styles from '../styles/page.module.css';

const ThankYouPage = () => {
  return (
    <div className={styles.main}>
      <ThankYouMessage />
    </div>
  );
};

export default ThankYouPage;
