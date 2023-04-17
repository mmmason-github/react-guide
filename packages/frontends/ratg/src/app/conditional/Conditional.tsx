import { useState } from "react";

import "./Conditional.css";
import Expenses from "./expenses/Expenses";
import NewExpense from "./new-expense/NewExpense";

export function ConditionalPage() {
  const [expenses, setExpenses] = useState<Expenses[]>([
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
  ]);

  const onAddExpense = (expense: Expenses) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses expenses={expenses} />
    </>
  );
}
export default ConditionalPage;
