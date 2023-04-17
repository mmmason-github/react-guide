import "./ExpenseDate.css";
import Card from "../card/Card";

export interface ExpenseDateProps {
  date: Date;
}

export function ExpenseDate({ date }: ExpenseDateProps) {
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </Card>
  );
}
export default ExpenseDate;
