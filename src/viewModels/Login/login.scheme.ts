import * as yup from "yup";

export const loginScheme = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export type LoginFormData = yup.InferType<typeof loginScheme>;
