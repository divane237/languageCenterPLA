import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const CustomFormSelectInput = ({
  control,
  name,
  label,
  options = [{ name: "", value: "" }],
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="min-w-[100px] px-4 py-1">
          <FormLabel className="text-xs sm:text-sm font-semibold whitespace-nowrap max-sm:text-center max-sm:block">
            {label}
          </FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            className="bg-blue-400"
          >
            <FormControl>
              <SelectTrigger className="focus:ring-2 rounded-xl transition-all duration-200 text-xs sm:text-sm">
                <SelectValue placeholder="Select a document" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="">
              {options.map((option) => (
                <SelectItem
                  key={option?.name}
                  value={option?.value}
                  className="text-xs sm:text-sm"
                >
                  {option?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormSelectInput;
