import { formDataTypes } from '@/types/formData/formData';
import { FC, SetStateAction } from 'react';
import { useFormData } from '../../../../contexts';
import styles from './PersonalInfo.module.scss';
import { Field } from '../../Field/Field';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button/Button';

// ...
const PHONE_NO_REGEX = /^[0-9\- ]{8,14}$/;
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface PersonalInfoProps {}
export const PersonalInfo: FC<PersonalInfoProps> = () => {
  const { setFormValues, data } = useFormData();
  console.log(data);
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (values: SetStateAction<formDataTypes>) => {
    setFormValues(values);
  };

  return (
    <div className={styles.wrapper}>
      <p>Step 1 of 2</p>
      <p className={styles.title}>Personal Info</p>
      <p>Please provide your name,email address, and phone number</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Field id="name" label="Name" error={errors.name}>
          <input
            type="name"
            id="name"
            {...register('name', {
              required: { value: true, message: 'Name is required' },
              maxLength: { value: 20, message: 'min length should be 20' },
            })}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: { value: true, message: 'Email is required' },
              pattern: { value: EMAIL_REGEX, message: 'incorrect email' },
            })}
          />
        </Field>
        <Field id="phoneNumber" label="Phone number" error={errors.phoneNumber}>
          <input
            type="string"
            id="phoneNumber"
            {...register('phoneNumber', {
              required: { value: true, message: 'Phone number is required' },
              pattern: { value: PHONE_NO_REGEX, message: 'incorrect phone number' },
            })}
          />
        </Field>
        <Field id="address" label="Address" error={errors.address}>
          <input
            type="address"
            id="address"
            {...register('address', {
              required: { value: true, message: 'Address is required' },
            })}
          />
        </Field>
        <Button disabled={!isValid} type="submit" onClick={() => router.push('/plan')}>
          Next
        </Button>
      </form>
    </div>
  );
};
