import "./ExpensesFilter.css";

interface ExpensesFilterProps {
  selected: string;
  onChangeFilter: (selectedYear: string) => void;
}

export function ExpensesFilter({
  selected,
  onChangeFilter
}: ExpensesFilterProps) {
  const dropDownChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChangeFilter(event.currentTarget.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">Filter by year</label>
        <select name="filter" value={selected} onChange={dropDownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
export default ExpensesFilter;
