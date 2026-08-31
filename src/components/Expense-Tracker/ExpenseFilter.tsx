import categories from "../../services/categories";
interface Props {
  onChange: (cat: string) => void;
}
const ExpenseFilter = ({ onChange }: Props) => {
  return (
    <div>
      <select
        onChange={(e) => onChange(e.target.value)}
        name="ExpenseFilter"
        id=""
        className="px-6 py-2 border rounded-lg w-lg mb-3"
      >
        <option value=""></option>
<<<<<<< HEAD
        {categories.map((cat) => (
=======
        {categories.map((cat: string) => (
>>>>>>> d34f6cb (Create Expense Form)
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
