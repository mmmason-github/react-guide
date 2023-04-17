import "./ExpenseItem.css";
import Card from "../card/Card";
import ExpenseDate from "../expense-date/ExpenseDate";

export interface ExpenseItemProps {
  amount: number;
  date: Date;
  title: string;
}
export function ExpenseItem({ amount, date, title }: ExpenseItemProps) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
