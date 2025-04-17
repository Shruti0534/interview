"use client"
import{z} from "zod"
const formSchema=z.object({
    username:z.string().min(2).max
})
export default function AuthForm() {
  return (
    <div>
      
    </div>
  )
}
