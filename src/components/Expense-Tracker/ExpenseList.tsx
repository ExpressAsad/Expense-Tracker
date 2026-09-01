export interface ExpenseFields {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Expense {
  expenses: ExpenseFields[];
  onClick: (id: number) => void;
}
const ExpenseList = ({ expenses, onClick }: Expense) => {
  return (
    <>
      <table className="table-auto border-collapse border border-gray-400">
        <caption className="caption-top">
          <h3 className="text-xl font-bold">Expense List</h3>
        </caption>
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Amount</th>
            <th className="border border-gray-400 px-4 py-2">Category</th>
            <th className="border border-gray-400 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="border border-gray-400 px-4 py-2">
                {expense.description}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                ${expense.amount}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {expense.category}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  onClick={() => onClick(expense.id)}
                  className="px-4 py-2 border-2 border-red-400 rounded-lg text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Total</td>
            <td className="border border-gray-400 px-4 py-2">
              ${expenses.reduce((total, expense) => total + expense.amount, 0)}
            </td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2"></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
