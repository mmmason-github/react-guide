import "./Expenses.css";
import Card from "../card/Card";
import ExpenseItem from "../expense-item/ExpenseItem";

export interface Expenses {
  amount: number;
  date: Date;
  id: string;
  title: string;
}

export interface ExpensesProps {
  expenses: Expenses[];
}

export function Expenses({ expenses }: ExpensesProps) {
  return (
    <Card className="expenses">
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
