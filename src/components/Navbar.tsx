import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 ">
      <Link className="text-white font-bold" href={"/"}>
        TodoApp
      </Link>
      <div className="flex flex-1 justify-end px-3">
        <ThemeToggle />
      </div>
      <Link
        className="bg-white p-2 dark:bg-slate-400 flex justify-end"
        href={"/AddTodo"}
      >
        Add ToDo
      </Link>
    </nav>
  );
}
