/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function addTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { push, refresh } = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("You have to provide a title and a description");
    }

    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
        cache: "no-store",
      });

      if (res.ok) {
        push("http://localhost:3000/");
        refresh();
      } else {
        throw new Error("Failed to create the ToDo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 dark:bg-slate-300"
        type="text"
        placeholder="ToDo Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 dark:bg-slate-300"
        type="text"
        placeholder="ToDo Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add ToDo
      </button>
    </form>
  );
}
