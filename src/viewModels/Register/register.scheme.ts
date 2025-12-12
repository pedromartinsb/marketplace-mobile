import * as yup from "yup";

export const registerScheme = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters long"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\d(11)$/,
      "Phone number must have exactly 11 digits (DDD + number)"
    ),
});
