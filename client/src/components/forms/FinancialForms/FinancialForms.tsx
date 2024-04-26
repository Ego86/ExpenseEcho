/* eslint-disable react/display-name */
/* eslint-disable no-console */
/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-constructed-context-values */
"use client"

import React, { memo, useEffect, useState } from "react"
// eslint-disable-next-line max-len
import useFinancialFormsLogic from "@/Core/hook/useFinancialFormsLogic/useFinancialFormsLogic"
import { ChartOptions, Financialoptions } from "@/Core/constant/Select"
import { IChartFinanceOptions, SaveOptionsProps } from "@/Core/interface"
import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"
import styles from "./FunancialForms.module.scss"
import FinancialSelect from "../Select/FinancialSelect"

export const optionsStateForm: IChartFinanceOptions = {
  nameOperation: "",
  amount: 0,
  currency: "",
  errorHandler: "",
  isSendData: false,
  color: "",
  chartName: "",
}
const FinancialForms = memo(({ saveOptions }: SaveOptionsProps) => {
  const [stateForm, setStateForm] =
    useState<IChartFinanceOptions>(optionsStateForm)
  const { choosingCourse, handleSubmit, resetValue } = useFinancialFormsLogic({
    ...stateForm,
    setStateForm,
  })
  useEffect(() => {
    if (stateForm.isSendData) {
      saveOptions(stateForm)
    }
  }, [stateForm.isSendData])
  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Выберете тип операции</legend>
          <label>
            <FinancialSelect
              value={stateForm.nameOperation}
              onChange={(e) =>
                setStateForm((prev: any) => ({
                  ...prev,
                  nameOperation: e?.target?.value,
                }))
              }
              options={Financialoptions}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберете диаграмму</legend>
          <label>
            <FinancialSelect
              options={ChartOptions}
              value={stateForm.chartName}
              onChange={(e) =>
                setStateForm((prev: any) => ({
                  ...prev,
                  chartName: e.target.value,
                }))
              }
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Сумма операции</legend>
          <label htmlFor="consumption">
            <Input
              type="text"
              id="consumption"
              value={
                typeof stateForm.amount === "number" ? stateForm.amount : 0
              }
              onChange={(e) =>
                setStateForm((prev: any) => ({
                  ...prev,
                  amount: Number(e.target.value),
                }))
              }
              placeholder="Расход"
            />
          </label>
        </fieldset>
        <div className={styles.currency}>
          <Button
            type="button"
            onClick={() => choosingCourse("rub")}
            className={stateForm.currency === "rub" ? styles.active : ""}
          >
            RUB
          </Button>
          <Button
            type="button"
            onClick={() => choosingCourse("usd")}
            className={stateForm.currency === "usd" ? styles.active : ""}
          >
            USD
          </Button>
          <br />
        </div>
        <Button className="mb-2" type="submit">
          Сохранить
        </Button>
      </form>
      <Button type="button" className="mr-3" onClick={() => resetValue()}>
        Сбросить поля ввода
      </Button>
    </div>
  )
})

export default FinancialForms
