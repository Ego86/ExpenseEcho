/* eslint-disable @typescript-eslint/no-shadow */
import { Chart, ChartConfiguration, registerables } from "chart.js"

const line = (
  nameOperation: string[],
  arrAmountRub: number[],
  arrAmountUSD: number[],
  color: string[],
) => {
  Chart.register(...registerables)
  const curses = arrAmountRub ? arrAmountRub : arrAmountUSD
  const chartConfig: ChartConfiguration<"line", number[], string> = {
    type: "line",
    data: {
      labels: ["jan", "feb", "may", "sept", "jule", "dec", "april"],
      datasets: [
        {
          label: "My First Dataset",
          data: [0, ...curses],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.2,
        },
      ],
    },
  }
  return chartConfig
}
export default line
