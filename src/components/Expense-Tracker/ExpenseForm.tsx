const ExpenseForm = () => {
  return (
    <div>
      <form action="" className="mb-3">
        <div className="mb-3">
          <label htmlFor="description"></label>
          <input
            id="description"
            type="text"
            className="border px-6 py-2 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
