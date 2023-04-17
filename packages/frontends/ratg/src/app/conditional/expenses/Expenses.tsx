import { useState } from "react";

import "./Expenses.css";
import Card from "../card/Card";
import ExpensesChart from "../expenses-chart/ExpensesChart";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import ExpensesList from "../expenses-list/ExpensesList";

export interface Expenses {
  amount: number;
  date: Date;
  id?: string;
  title: string;
}

export interface ExpensesProps {
  expenses: Expenses[];
}

export function Expenses({ expenses }: ExpensesProps) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
