import { memo } from "react"
import { IChartFinanceOptions } from "@/Core/interface"
import styles from "./ChartDoughnut.module.scss"
import ChartDoughnutSetup from "./ChartDoughnutSetup"

const ChartFinance = memo(({ options }: { options: IChartFinanceOptions }) => {
  const { canvasRef, error } = ChartDoughnutSetup(options)
  console.log("render chart")
  if (error) {
    throw new Error(error)
  }
  return (
    <section className={styles.chartFinance}>
      <div className={styles.graphContainer}>
        <canvas ref={canvasRef} />
      </div>
      <div className={styles.financeList} />
    </section>
  )
})
export default ChartFinance
