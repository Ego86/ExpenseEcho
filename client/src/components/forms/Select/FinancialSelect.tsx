const FinancialSelect = ({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (event: any) => void
  options: string[]
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      name="financialSelect"
      className="text-black w-52 text-center h-9"
    >
      {options.map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        )
      })}
    </select>
  )
}
export default FinancialSelect
