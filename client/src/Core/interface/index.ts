import { Dispatch, SetStateAction } from "react"

export interface SaveOptionsProps {
  saveOptions: (options: IChartFinanceOptions) => void
}
export interface ChartItem extends CanvasRenderingContext2D {}
export interface IChartFinanceOptions {
  isSendData?: boolean
  nameOperation?: string
  amount?: number
  currency?: string
  color?: string
  chartName?: string
  errorHandler?: string
}
export interface IuseFinancialFormsLogicParams {
  setStateForm?: Dispatch<SetStateAction<IChartFinanceOptions>>
  nameOperation?: string
  amount?: number
  currency?: string
  color?: string
  chartName?: string
  errorHandler?: string
  isSendData?: boolean
}
export interface IOptionsStateChart {
  arrAmountRub?: number[]
  arrAmountUSD?: number[]
  nameOperation?: string[]
  color?: string[]
  error?: string
}
export interface ITextProps {
  className?: string
  type?: string
  children?: JSX.Element | string
}
