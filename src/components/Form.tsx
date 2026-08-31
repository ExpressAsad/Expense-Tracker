import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
  age: z
    .number({ message: "Age field is required" })
    .min(18, { message: "Age must be 18." }),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="w-16" htmlFor="name">
            Name:{" "}
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="px-6 py-2 border rounded-lg"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-3 ">
          <label className="w-16" htmlFor="age">
            Age:{" "}
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            type="number"
            id="age"
            className="px-6 py-2 border rounded-lg"
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-300 text-gray-200"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
