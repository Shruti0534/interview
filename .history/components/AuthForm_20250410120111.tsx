"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import{z} from "zod"
import{Button} from '@/components/ui/button'

import Link from "next/link"
import 
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

const authFormSchema=(type:FormTypr)=>{
  return z.object({
    name:type==='sign-up'?z.string().min(3):z.string().optional(),
    email:z.string().email(),
    password:z.string().min(3),
  })
}
export default function AuthForm({ type }: { type: form }) {
  const formSchema=authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email:"",
          password:"",

        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try{

        }catch(error){
          console.log(error);
          toast.error(`There was an error:${error}`)
        }
        console.log(values)
      }

  const isSignIn= type=== 'sign-in';
  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <img src="/logo.svg" alt="logo" height={32} width={38}/>
                <h2 className="text-primary-100">Prepwise</h2>

            </div>
            <h3>Practice Job Interview with AI</h3>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-6 mt-4">
        {!isSignIn &&<p>Name</p>}
        <p>Email</p>
        <p>Password</p>
        <Button type="submit">{isSignIn?'Sign in' :'Create an Account'}</Button>
      </form>
    </Form>
    <p className="text-center">
      {isSignIn?'No account yet?':'Have an account already?'}
      <Link href={!isSignIn?'/sign-in' : '/sign-up'} className='font-bold text-user-primary ml-1'>
      {!isSignIn?"Sign-in" :"Sign-up"}</Link>

    </p>
          </div>
    </div>
  )
}
