import React from 'react'
import { FormControl,FormDescription,FormItem,FormLabe } from './ui/form'

const FormField = () => (
    <FormField
    control={form.control}
    name="username"
    render={({ field }) => (
        <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
    />
)

export default FormField
