import { useForm } from "react-hook-form";
import categories from "../../services/categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
interface AddExpense {
  onSubmit: (data: FormData) => void;
}
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 characters." }),
  amount: z.number({ message: "Amount is required." }).min(5),
  category: z.string().min(1, { message: "Category is required." }),
});
type FormData = z.infer<typeof schema>;
const ExpenseForm = ({ onSubmit }: AddExpense) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        className="mb-3"
      >
        <div className="mb-3">
          <label htmlFor="description" className="block">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="border px-6 py-2 md:w-lg w-sm rounded-lg"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="block">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="border px-6 py-2 w-sm rounded-lg md:w-lg"
          />
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="block">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="px-6 py-2 border rounded-lg md:w-lg mb-3 w-sm"
          >
            <option value="">Select the option</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 hover:bg-blue-200 rounded-lg text-gray-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
