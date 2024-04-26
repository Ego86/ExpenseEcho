/* eslint-disable max-len */
import {
  IChartFinanceOptions,
  IuseFinancialFormsLogicParams,
} from "@/Core/interface"
import { optionsStateForm } from "@/components/forms/FinancialForms/FinancialForms"
import { useCallback, useEffect } from "react"

export type TypeStateForms = {
  nameOperation?: string
  amount?: number
  currency?: string
  color?: string
  chartName?: string
  errorHandler?: string
  isSendData?: boolean
}
const useFinancialFormsLogic = ({
  isSendData,
  amount,
  currency,
  errorHandler,
  nameOperation,
  color,
  chartName,
  setStateForm,
}: IuseFinancialFormsLogicParams) => {
  const fillingOutForm = useCallback(
    (fillingState: IChartFinanceOptions) => {
      setStateForm((prev) => ({ ...prev, ...fillingState }))
    },
    [setStateForm],
  )
  const resetValue = useCallback(() => {
    fillingOutForm(optionsStateForm)
  }, [fillingOutForm])
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    try {
      if (nameOperation && amount && currency) {
        fillingOutForm({ isSendData: true })
      } else {
        throw new Error("Please fill in all the fields and choose a currency.")
      }
    } catch (error: any) {
      fillingOutForm({ errorHandler: error.message })
    }
  }

  useEffect(() => {
    if (isSendData) {
      resetValue()
    }
  }, [isSendData, resetValue])
  const choosingCourse = useCallback(
    (course: string) => {
      try {
        if (!course) {
          throw new Error("Course not found.")
        }
        fillingOutForm({ currency: course })
      } catch (error: any) {
        console.error(error.message)
        fillingOutForm({ errorHandler: error.message })
      }
    },
    [fillingOutForm],
  )

  return { handleSubmit, choosingCourse, resetValue }
}

export default useFinancialFormsLogic
