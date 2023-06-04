import styles from '../styles/page.module.css';
import { PlanInfo } from '@/components/Forms/PlanInfo/PlanInfo';

const Plan = () => {
  return (
    <div className={styles.main}>
      <PlanInfo />
    </div>
  );
};

export default Plan;
