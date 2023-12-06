"use client";

import { useFormContext, Controller, RegisterOptions } from "react-hook-form";
import { Input } from "../ui/input";
import { getErrorMessageByPropertyName } from "@/lib/schema-validator";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    validation?: RegisterOptions;
    name: string;
  }

const FormInput = ({
  name,
  type = "text",
  id,
  defaultValue = "",
  validation,
  ...props
}: InputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <Controller
        control={control}
        defaultValue={defaultValue}
        rules={validation}
        name={name}
        render={({ field }) => {
          return (
            <div className="relative">
              <Input {...field} id={id} type={type} {...props} />
              {errorMessage && (
                <p className="absolute left-0 -bottom-6 text-destructive text-sm">{errorMessage}</p>
              )}
            </div>
          );
        }}
      />
    </>
  );
};

export default FormInput;
