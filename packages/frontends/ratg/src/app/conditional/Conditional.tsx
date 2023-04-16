import "./Conditional.css";
import Expenses from "./expense/Expenses";
import NewExpense from "./new-expense/NewExpense";

export function ConditionalPage() {
  const expenses: Expenses[] = [
    {
      amount: 94.12,
      date: new Date(2020, 7, 14),
      id: `e${Math.floor(Math.random() * 30000)}`,
      title: "Toilet Paper"
    },
    {
      amount: 799.49,
      date: new Date(2021, 2, 12),
      id: `e${Math.floor(Math.random() * 30000)}`,
      title: "New TV"
    },
    {
      amount: 294.67,
      date: new Date(2021, 2, 28),
      id: `e${Math.floor(Math.random() * 30000)}`,
      title: "Car Insurance"
    },
    {
      amount: 450,
      date: new Date(2021, 6, 11),
      id: `e${Math.floor(Math.random() * 30000)}`,
      title: "New Desk (Wooden)"
    }
  ];

  return (
    <>
      <NewExpense />
      <Expenses expenses={expenses} />
    </>
  );
}
export default ConditionalPage;
