import type { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  children: ReactNode;
  onRemove: () => void;
}
const Alert = ({ children, onRemove }: Props) => {
  return (
    <>
      <div className=" flex justify-between items-center mx-auto bg-blue-200 text-blue-400 rounded-lg container border border-gray-300 shadow-lg px-10 py-4">
        <p>{children}</p>
        <button
          onClick={onRemove}
          className="px-4 py-2 bg-blue-100 rounded-lg text-blue-700"
        >
          <IoMdClose size={'30px'} />
        </button>
      </div>
    </>
  );
};

export default Alert;
