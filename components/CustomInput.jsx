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
  inputType,
  placeholder = "Default Placeholder",
  label,
  disabled = false,
  className,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="px-4 py-1 text-center sm:text-left">
          <FormLabel className="text-xs md:text-sm font-bold whitespace-nowrap">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={
                inputType
                  ? inputType
                  : name === "password"
                  ? "password"
                  : "text"
              }
              className={`focus:ring-2 rounded-xl transition-all duration-200 text-[16px] md:text-sm text-black font-semibold ${className}`}
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
