"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface RemoveBtnProps {
  id: string;
}

export default function RemoveBtn({ id }: RemoveBtnProps) {
  const { refresh } = useRouter();

  const removeTodo = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          refresh();
        }
      } catch (error) {
        console.log("Couldnt delete the todo");
      }
    }
  };

  return (
    <button onClick={removeTodo} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
