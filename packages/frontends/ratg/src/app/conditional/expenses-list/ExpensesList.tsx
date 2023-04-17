import "./ExpensesList.css";
import ExpenseItem from "../expense-item/ExpenseItem";
import type Expenses from "../expenses/Expenses";

export interface ExpensesProps {
  expenses: Expenses[];
}

export function ExpensesList({ expenses }: ExpensesProps) {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
          title={expense.title}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;
