import { useState, ChangeEvent } from "react";

// Define el tipo genérico T
export const useForm = <T extends Record<string, unknown>>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
