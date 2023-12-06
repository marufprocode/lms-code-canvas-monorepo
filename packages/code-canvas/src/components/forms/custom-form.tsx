"use client";

import { cn } from "@/lib/utils";
import { ReactElement, ReactNode, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShadForm } from "../ui/form";

type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
  itemDirection?: "column" | "row";
  itemSpacing?: number;
  className?: string;
} & FormConfig;

const Form = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
  className,
}: FormProps) => {
  const formConfig: FormConfig = {};
  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;
  const methods = useForm<FormProps>(formConfig);

  const { reset } = methods;

  const onSubmit = async (data: any) => {
    await submitHandler(data);
    reset();
  };

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <ShadForm {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
      >
        {children}
      </form>
    </ShadForm>
  );
};

export default Form;
