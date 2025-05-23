// src/types/ui-components.d.ts
import * as React from "react";

declare module "@/components/ui/button" {
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    size?: "default" | "sm" | "lg";
    asChild?: boolean;
  }

  export const Button: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >;
}

declare module "@/components/ui/input" {
  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "default" | "ghost";
  }

  export const Input: React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  >;
}

declare module "@/components/ui/form" {
  import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

  interface FormProps<T extends FieldValues> {
    children: React.ReactNode;
    form: UseFormReturn<T>;
    onSubmit: (values: T) => void;
  }

  export const Form: <T extends FieldValues>(
    props: FormProps<T>
  ) => JSX.Element;
  export const FormControl: React.FC<{ children: React.ReactNode }>;
  export const FormDescription: React.FC<{ children: React.ReactNode }>;
  export const FormField: React.FC<any>; // Replace 'any' with specific props if needed
  export const FormItem: React.FC<{ children: React.ReactNode }>;
  export const FormLabel: React.FC<{ children: React.ReactNode }>;
  export const FormMessage: React.FC<{ children?: React.ReactNode }>;
}
