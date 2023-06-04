import { FormContextData, formDataTypes } from '@/types/formData/formData';
import { ReactNode, createContext, useContext, useState } from 'react';

const defaultValues = {
  data: {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    plan: '',
    planTerm: '',
  },
  setFormValues: (): void => {},
};

export const FormContext = createContext<FormContextData>(defaultValues);

interface Props {
  children?: ReactNode;
}

export const FormProvider = ({ children }: Props) => {
  const [data, setData] = useState({});

  const setFormValues = (values: {}) => {
    setData(prevValues => ({
      ...prevValues,
      ...values,
    }));
  };

  return <FormContext.Provider value={{ data, setFormValues }}>{children}</FormContext.Provider>;
};

export const useFormData = () => useContext(FormContext);
