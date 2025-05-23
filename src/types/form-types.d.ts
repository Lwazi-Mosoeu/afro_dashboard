// src/types/form-types.d.ts
import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

declare module "react-hook-form" {
  interface FormFieldRenderProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > {
    field: UseControllerProps<TFieldValues, TName>["control"];
  }
}
