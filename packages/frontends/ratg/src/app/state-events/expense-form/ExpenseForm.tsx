import { useState } from "react";

import "./ExpenseForm.css";
import type Expenses from "../expenses/Expenses";

interface ExpenseFormProps {
  onSaveExpenseData: (expense: Expenses) => void;
}

interface FormValues {
  amount: string;
  date: string;
  title: string;
}

const initialFormValues: FormValues = {
  amount: "",
  date: "",
  title: ""
};

export function ExpenseForm({ onSaveExpenseData }: ExpenseFormProps) {
  const [userInput, setUserInput] = useState<FormValues>(initialFormValues);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const expenseData: Expenses = {
      amount: Number(userInput.amount),
      date: new Date(userInput.date),
      id: `e${Math.floor(Math.random() * 30000)}`,
      title: userInput.title
    };
    onSaveExpenseData(expenseData);
    setUserInput(initialFormValues);
  };

  const amountChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(
      (prevState): FormValues => ({
        ...prevState,
        amount: event.currentTarget.value
      })
    );
  };

  const dateChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(
      (prevState): FormValues => ({
        ...prevState,
        date: event.currentTarget.value
      })
    );
  };

  const titleChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(
      (prevState): FormValues => ({
        ...prevState,
        title: event.currentTarget.value
      })
    );
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            placeholder="title"
            type="text"
            value={userInput.title}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            min="0"
            name="amount"
            placeholder="amount"
            step="0.01"
            type="number"
            value={userInput.amount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            value={userInput.date}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
