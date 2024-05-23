"use server"

import { use } from "react"
import SignUp, { IFormValue } from "./singUp/SingUp"
import style from "./Authorization.module.scss"

function Authorization() {
  return (
    <section className={style.authContainer}>
      <div />
      <SignUp />
    </section>
  )
}

export default Authorization
