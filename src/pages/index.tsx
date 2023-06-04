import styles from '../styles/page.module.css';
import { useFormData } from '../../contexts';
import Head from 'next/head';
import { PersonalInfo } from '@/components/Forms/PersonalInfo/PersonalInfo';

const App = () => {
  const { data } = useFormData();
  console.log(data);
  return (
    <main className={styles.main}>
      <Head>
        <title>RHF Multi Step Form</title>
      </Head>
      <PersonalInfo />
    </main>
  );
};

export default App;
