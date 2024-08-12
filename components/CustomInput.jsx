import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
const CustomInput = ({
  name,
  control,
  placeholder = "Default Placeholder",
  label,
  disabled = false,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="px-4 py-1 text-center sm:text-left">
          <FormLabel className="text-xs sm:text-sm font-bold">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={name === "password" ? "password" : "text"}
              className={`focus:ring-2 rounded-xl transition-all duration-200`}
              placeholder={placeholder}
              {...field}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
