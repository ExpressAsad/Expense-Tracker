import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    (setDarkMode(!darkMode),
      document.documentElement.setAttribute(
        "data-theme",
        darkMode ? "dark" : "light",
      ));
    // navigate("/");
  };
  return (
    <div>
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </div>
  );
};

export default Button;
