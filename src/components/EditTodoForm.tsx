"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";

interface EditTodoFormProps {
  id: string;
  title: string;
  description: string;
}

export default function EditTodoForm({
  id,
  title,
  description,
}: EditTodoFormProps) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const { push } = useRouter();

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();

    if (!newTitle || !newDescription) {
      alert("You have to provide a title and a description");
    }

    try {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        push("http://localhost:3000/");
      } else {
        throw new Error("Failed to create the ToDo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleClick} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2 dark:bg-slate-300"
        type="text"
        placeholder="ToDo Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2 dark:bg-slate-300"
        type="text"
        placeholder="ToDo Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update ToDo
      </button>
    </form>
  );
}
