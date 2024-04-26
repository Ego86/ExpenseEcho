import { Metadata } from "next"
// eslint-disable-next-line max-len
import FinancialManagementScreen from "@/components/screens/FinancialManagement/FinancialManagementScreen"

export const metadata: Metadata = {
  title: "Financial Forms",
  description: "create chart",
}
export default function FinancialManagement() {
  return <FinancialManagementScreen />
}
