import { Dispatch, SetStateAction } from 'react';

export interface formDataTypes {
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  plan?: string;
  planTerm?: string;
}

export interface FormContextData {
  data: formDataTypes;
  setFormValues: Dispatch<SetStateAction<formDataTypes>>;
}
