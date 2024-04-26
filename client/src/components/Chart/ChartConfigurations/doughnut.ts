import {
  ArcElement,
  Chart,
  ChartConfiguration,
  DoughnutController,
  Legend,
  Tooltip,
} from "chart.js"

const doughnut = (
  nameOperation: string[],
  arrAmountRub: number[],
  arrAmountUSD: number[],
  color: string[],
) => {
  Chart.register(DoughnutController, ArcElement, Legend, Tooltip)

  const chartConfig: ChartConfiguration<"doughnut", number[], string> = {
    type: "doughnut",
    data: {
      labels: nameOperation.length > 0 ? nameOperation : ["empty"],
      datasets: [
        {
          data:
            arrAmountRub.length > 0 || arrAmountUSD.length > 0
              ? arrAmountRub || arrAmountUSD
              : [100],
          backgroundColor: color.length > 0 ? color : "white",
        },
      ],
    },
  }
  return chartConfig
}
export default doughnut
