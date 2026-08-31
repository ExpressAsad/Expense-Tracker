import { useState } from "react";
import Button from "../components/Button";

const Users = () => {
  const items = [
    { city: "Lahore", url: "https://tailwindcss.com/docs/border-width" },
    { city: "Lahore", url: "#" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} onClick={() => setSelectedIndex(index)}>
            <a
              className={`block text-center px-10 py-4 border  rounded-md ${selectedIndex === index ? "bg-blue-400 dark:bg-blue-900" : ""}`}
              href={item.url}
            >
              {item.city}
            </a>
          </li>
        ))}
      </ul>
      <Button />
    </>
  );
};

export default Users;
