import * as yup from "yup";
export const updateUserSchema = yup.object().shape({
  email: yup.string().email("Invalid email format"),

  fullName: yup
    .string()
    .min(3, "Full name should be at least 3 characters long")
    .max(25, "Full name should not exceed 25 characters"),
});
