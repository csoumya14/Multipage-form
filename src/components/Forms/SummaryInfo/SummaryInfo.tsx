import { FC } from 'react';
import { useFormData } from '../../../../contexts';
import { useForm } from 'react-hook-form';
import styles from './Summary.module.scss';
import { ButtonGroup } from '@/components/ButtonGroup/ButtonGroup';
// ...

interface SummaryInfoProps {}

export const SummaryInfo: FC<SummaryInfoProps> = () => {
  const { data } = useFormData();
  const { handleSubmit } = useForm({ defaultValues: data });
  const submitData = (value: any) => {
    console.info(value);
    // Submit data to the server
  };
  return (
    <form onSubmit={handleSubmit(submitData)} className={styles.wrapper}>
      <p className={styles.title}>Finishing up</p>
      <p>Summary of your information</p>
      <ul>
        <li>Name: {data.name}</li>
        <li>Email: {data.email}</li>
        <li>Phone number: {data.phoneNumber}</li>
        <li>Address: {data.address}</li>
        <li>Plan:{data.plan}</li>
        <li>Term:{data.planTerm}</li>
      </ul>
      <ButtonGroup
        isValid={true}
        forwardHref="thankYouMessage"
        backHref="plan"
        forwardTextLabel="confirm"
      />
    </form>
  );
};
