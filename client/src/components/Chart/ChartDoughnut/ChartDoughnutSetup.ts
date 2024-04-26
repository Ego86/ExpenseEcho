/* eslint-disable @typescript-eslint/no-shadow */
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { Chart, ChartItem } from "chart.js"
import { IChartFinanceOptions, IOptionsStateChart } from "@/Core/interface"
import doughnut from "../ChartConfigurations/doughnut"
import line from "../ChartConfigurations/line"

type TypeChartArgsOptions = [string[], number[], number[], string[]]
const optionsStateChart: IOptionsStateChart = {
  arrAmountRub: [],
  arrAmountUSD: [],
  nameOperation: [],
  color: [],
  error: "",
}
const ChartDoughnutSetup = (options: IChartFinanceOptions) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stateChartData, setStateChartData] = useState(optionsStateChart)
  const fillingStateChart = useCallback(
    (optionsElem: IOptionsStateChart) => {
      setStateChartData((prev) => ({ ...prev, ...optionsElem }))
    },
    [options],
  )
  console.log("render setup")
  useEffect(() => {
    if (options.currency === "rub") {
      fillingStateChart({
        arrAmountRub: stateChartData.arrAmountRub.concat(options.amount),
        nameOperation: stateChartData.nameOperation.concat(
          options.nameOperation,
        ),
        color: stateChartData.color.concat(options.color),
      })
    } else {
      fillingStateChart({
        arrAmountUSD: stateChartData.arrAmountUSD.concat(options.amount),
        nameOperation: stateChartData.nameOperation.concat(
          options.nameOperation,
        ),
        color: stateChartData.color.concat(options.color),
      })
    }
  }, [options])

  useEffect(() => {
    try {
      const canvas = canvasRef.current
      let chart: Chart<"line" | "doughnut", number[], string> | null = null
      const ctx: ChartItem | null | undefined = canvas?.getContext("2d")
      const chartArgsOptions: TypeChartArgsOptions = [
        stateChartData.nameOperation,
        stateChartData.arrAmountRub,
        stateChartData.arrAmountUSD,
        stateChartData.color,
      ]
      if (ctx) {
        if (chart) {
          chart.destroy()
        }
        chart = new Chart(
          ctx!,
          options.chartName !== "Линейная"
            ? doughnut(...chartArgsOptions)
            : line(...chartArgsOptions),
        )
      }
      console.log(stateChartData.arrAmountRub)
      return () => {
        if (chart) {
          chart.destroy()
        }
      }
    } catch (error: any) {
      fillingStateChart({ error })
      // setError(error)
      console.error(error)
    }
  }, [options])
  return { canvasRef, error: stateChartData.error }
}
export default ChartDoughnutSetup
