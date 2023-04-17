import "./NewExpense.css";
import ExpenseForm from "../expense-form/ExpenseForm";
import type Expenses from "../expenses/Expenses";

interface NewExpenseProps {
  onAddExpense: (expense: Expenses) => void;
}

export function NewExpense({ onAddExpense }: NewExpenseProps) {
  const onSaveExpenseData = (expense: Expenses) => {
    onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
}
export default NewExpense;
