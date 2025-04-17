import React from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Controller, FieldValues } from 'react-hook-form';
interface FormFieldProps<T extends FieldValues>{
  control:Control<

}

const FormField = ({ name, control,label,placeholder,type="text" }:FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;


