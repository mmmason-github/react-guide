import { useState } from "react";

import "./Expenses.css";
import Card from "../card/Card";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
          title={expense.title}
        />
      ))}
    </Card>
  );
}
export default Expenses;
