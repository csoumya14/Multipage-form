import { FC, SetStateAction } from 'react';
import { useFormData } from '../../../../contexts';
import styles from './PlanInfo.module.scss';
import { useForm } from 'react-hook-form';
import { formDataTypes } from '@/types/formData/formData';
import { Field } from '@/components/Field/Field';
import { ButtonGroup } from '@/components/ButtonGroup/ButtonGroup';

interface PlanInfoProps {}

let plan = [
  { label: 'Arcade', value: 'Arcade' },
  { label: 'Advanced', value: 'Advanced' },
  { label: 'Pro', value: 'Pro' },
];

let planTerm = [
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Yearly', value: 'Yearly' },
];
export const PlanInfo: FC<PlanInfoProps> = () => {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (values: SetStateAction<formDataTypes>) => {
    setFormValues(values);
  };
  return (
    <div className={styles.wrapper}>
      <p>Step 2 of 2</p>
      <p className={styles.title}>Select your plan</p>
      <p>You have the option of monthly or yearly billing.</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Field id="plan" label="Select plan" error={errors.plan}>
          <select {...register('plan', { required: true })} id="plan">
            {plan.map(item => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </Field>
        <Field id="planTerm" label="Select billing term" error={errors.plan}>
          <select {...register('planTerm', { required: true })} id="planTerm">
            {planTerm.map(item => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </Field>
        <ButtonGroup isValid={true} forwardHref="summary" backHref="" forwardTextLabel="Next" />
      </form>
    </div>
  );
};
