"use client"

import { IChartFinanceOptions } from "@/Core/interface"
import {
  useCallback,
  useDeferredValue,
  useMemo,
  useState,
  useTransition,
} from "react"
import ChartFinance from "../../Chart/ChartDoughnut/ChartDoughnut"
import FinancialForms, {
  optionsStateForm,
} from "../../forms/FinancialForms/FinancialForms"

export default function FinancialManagementScreen() {
  const [options, setOptions] = useState<IChartFinanceOptions>(optionsStateForm)
  const [isPending, setTrasition] = useTransition()
  const saveOptions = useCallback((data: IChartFinanceOptions): void => {
    setTrasition(() => {
      setOptions(data)
    })
  }, [])
  const memoOptions = useMemo(() => options, [options])
  return (
    <section className="justify-around">
      <FinancialForms saveOptions={saveOptions} />
      <ChartFinance options={memoOptions} />
    </section>
  )
}
