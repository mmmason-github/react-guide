import "./NewExpense.css";
import ExpenseForm from "../expense-form/ExpenseForm";
import type Expenses from "../expense/Expenses";

export function NewExpense() {
  const onSaveExpenseData = (expense: Expenses) => {
    // eslint-disable-next-line no-console
    console.log(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
}
export default NewExpense;
