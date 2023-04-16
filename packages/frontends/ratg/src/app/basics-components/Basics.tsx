import "./Basics.css";
import Expenses from "./expense/Expenses";

export function BasicsPage() {
  const expenses: Expenses[] = [
    {
      amount: 94.12,
      date: new Date(2020, 7, 14),
      id: "e1",
      title: "Toilet Paper"
    },
    {
      amount: 799.49,
      date: new Date(2021, 2, 12),
      id: "e2",
      title: "New TV"
    },
    {
      amount: 294.67,
      date: new Date(2021, 2, 28),
      id: "e3",
      title: "Car Insurance"
    },
    {
      amount: 450,
      date: new Date(2021, 6, 11),
      id: "e4",
      title: "New Desk (Wooden)"
    }
  ];

  return (
    <>
      <h1 className="heading">Expense</h1>
      <Expenses expenses={expenses} />
    </>
  );
}
export default BasicsPage;
