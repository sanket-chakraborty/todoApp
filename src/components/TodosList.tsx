import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTodos = async () => {
  try {
    const res = await fetch("http://localhost/3000/api/todos", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading todos");
  }
};

export default async function TodosList() {
  const { todos } = await getTodos();

  return (
    <>
      {todos.map((t: any) => (
        <div
          key={t._id}
          className="p-4 border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editTodo/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
