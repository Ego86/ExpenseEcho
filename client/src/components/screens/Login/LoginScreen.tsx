"use server"

import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"
import { useSession } from "next-auth/react"

const LoginScreen = () => {
  const { data: session, status } = useSession(false)
  return (
    <form action="">
      <Input type="submit" />
      <Input type="submit" />
      <Button></Button>
    </form>
  )
}

export default LoginScreen
