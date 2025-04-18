// app/sign-in/page.tsx

import React from 'react'
import AuthForm from '@/components/AuthForm';

// <- This tells Next.js to always render this page on request

const Page = () => {
  return (
    <AuthForm type="sign-in" />
  )
}

export default Page;
