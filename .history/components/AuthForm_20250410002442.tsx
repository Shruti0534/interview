"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import{z} from "zod"
const formSchema=z.object({
    username:z.string().min(2).max(50),
})
export default function AuthForm() {
    const form=useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            username:"",
        },
    })
    
  return (
    <div>
      
    </div>
  )
}
