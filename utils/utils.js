import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function truncateStringAtFirstFullStop(input) {
  // Find the index of the first full stop
  const firstFullStopIndex = input.indexOf(".");

  // Check if there is a full stop in the string
  if (firstFullStopIndex !== -1) {
    // Truncate the string at the first full stop and add "..."
    return input.substring(0, firstFullStopIndex + 1) + "...";
  }

  // If there is no full stop, return the original string
  return input;
}

function capitalizeEachWord(string) {
  return string
    .split(" ") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(" "); // Join the array back into a string
}

export const authSchema = (type) =>
  z.object({
    // Sign Up
    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, { message: "Must be at least 3 character" })
            .max(200, { message: "Max. capacity" }),
    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, { message: "Must be at least 3 character" })
            .max(200, { message: "Max. capacity" }),
    address:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, { message: "Must be at least 3 character" })
            .max(60, { message: "At most 60 characters." }),
    dateOfBirth: type === "sign-in" ? z.string().optional() : z.string().date(),
    identificationDocument:
      type === "sign-in"
        ? z.string().optional()
        : z.string({
            message: "Please select one document type.",
          }),
    idNumber:
      type === "sign-in" ? z.string().optional() : z.string().max(30).min(2),

    // Sign In
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(5, { message: "At least 5 characters." }),
  });

export const ieltsSchema = z.object({
  name: z.string(),
  category: z.string().min(1, { message: "Please select an exam category" }),
  currentLevel: z
    .string()
    .min(1, { message: "Please choose your present a  language level" }),
  requiredScore: z
    .string()
    .min(1, { message: "Please input the score you need" })
    .max(4, { message: "Please input a valid score" }),

  examDate: z.string({ message: "Please fill it out" }).date(),
  tutor: z.string().min(2, { message: "Please select a tutor" }),
});

export const personalAddress = z.object({
  address: z.string(),
  newAddress: z
    .string()
    .min(3, { message: "Too short" })
    .max(250, { message: "Too long" }),
});
