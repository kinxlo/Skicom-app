import React, { forwardRef } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { IconType } from "react-icons";

interface FormInputProperties {
  type: string | any;
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  Icon?: IconType;
  errors: FieldErrors;
  isVisible?: boolean;
  setIsVisible?: (isVisible: boolean) => void;
  validate?: (value: string) => boolean | string | undefined;
  defaultValue?: string | undefined | object;
  isRequired: boolean;
  disabled?: boolean;
}

interface FormSelectProperties {
  id: string;
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder: string;
  data: Array<{ _id: string; name: string }>;
  register: UseFormRegister<any>;
  setValue?: (name: string, value: string) => void;
  errors: FieldErrors;
  validate?: (value: string) => boolean | string | undefined;
  control: Control<FieldValues>;
  disabled?: boolean;
  isRequired: boolean;
}

export const FormInput = ({
  type,
  id,
  name,
  label,
  placeholder,
  register,
  Icon,
  errors,
  isVisible,
  setIsVisible,
  validate,
  defaultValue,
  isRequired,
  disabled,
  ...rest
}: FormInputProperties) => {
  const toggleVisibility = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Enter")
    ) {
      event.preventDefault();
      setIsVisible?.(!isVisible);
    }
  };

  return null;
};

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProperties>(
  (
    {
      label,
      id,
      data,
      name,
      errors,
      placeholder,
      validate,
      defaultValue,
      control,
      disabled,
      isRequired,
    },
    reference,
  ) => {
    return null;
  },
);
