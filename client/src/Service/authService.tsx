/* eslint-disable class-methods-use-this */
import { IFormValue } from "@/components/screens/authorization/singUp/SingUp"

class AuthService {
  async signIn(user: IFormValue) {
    try {
      const resp = await fetch(process.env.SERVER_URL_SIGNUP, {
        method: "POST",
        cache: "force-cache",
        body: JSON.stringify(user),
      })
      const result = await resp.json()
      return result
    } catch (error) {
      /* empty */
    }
  }

  async signUp(user: IFormValue) {
    try {
      const resp = await fetch(process.env.SERVER_URL_SIGNUP, {
        method: "POST",
        cache: "force-cache",
        body: JSON.stringify(user),
      })
      const result = await resp.json()
      return result
    } catch (error) {
      /* empty */
    }
  }
}

export default new AuthService()
