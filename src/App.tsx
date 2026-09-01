import { useState } from "react";
import ExpenseList from "./components/Expense-Tracker/ExpenseList";
import ExpenseFilter from "./components/Expense-Tracker/ExpenseFilter";
import ExpenseForm from "./components/Expense-Tracker/ExpenseForm";
import { type ExpenseFields } from "./components/Expense-Tracker/ExpenseList";
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Coffee",
      amount: 5,
      category: "Food",
    },
    {
      id: 2,
      description: "Bus",
      amount: 3,
      category: "Transport",
    },
    {
      id: 3,
      description: "Lunch",
      amount: 12,
      category: "Food",
    },
    {
      id: 4,
      description: "Netflix",
      amount: 15,
      category: "Entertainment",
    },
    {
      id: 5,
      description: "Electricity Bill",
      amount: 75,
      category: "Utilities",
    },
    {
      id: 6,
      description: "Groceries",
      amount: 45,
      category: "Food",
    },
    {
      id: 7,
      description: "Petrol",
      amount: 50,
      category: "Transport",
    },
    {
      id: 8,
      description: "Gym Membership",
      amount: 30,
      category: "Health",
    },
    {
      id: 9,
      description: "Mobile Phone Bill",
      amount: 25,
      category: "Utilities",
    },
    {
      id: 10,
      description: "Movie Ticket",
      amount: 10,
      category: "Entertainment",
    },
  ]);
  const [category, setCategory] = useState("");
  const filteredExpenses = category
    ? expenses.filter((e) => e.category === category)
    : expenses;
  const handleClick = (id: number) =>
    setExpenses(expenses.filter((e) => e.id !== id));
  const handleSubmit = (data: ExpenseFields) => {
    setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
  };
  return (
    <div>
      <ExpenseForm onSubmit={handleSubmit} />
      <ExpenseFilter onChange={setCategory} />
      <ExpenseList expenses={filteredExpenses} onClick={handleClick} />
    </div>
  );
};

export default App;
