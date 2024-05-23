"use client"
import { useState } from "react"
import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"

export interface IFormValue {
  email: string
  password: string
}

function SignUp(fetchData: (value: IFormValue) => void) {
  const [formValue, setFormValue] = useState<IFormValue>({
    email: "",
    password: "",
  })
  return (
    <form className="flex flex-col [&>input]:mb-3">
      <Input
        placeholder="email"
        value={formValue.email}
        onChange={(e) =>
          setFormValue((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <Input
        placeholder="password"
        value={formValue.password}
        onChange={(e) =>
          setFormValue((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <Button onClick={() => fetchData(formValue)}>Войти</Button>
    </form>
  )
}

export default SignUp
