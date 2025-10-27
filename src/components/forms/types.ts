import { FormSubmitHandler } from '@/types';

export interface FormProps {
  onSubmit: FormSubmitHandler;
  loading: boolean;
}
