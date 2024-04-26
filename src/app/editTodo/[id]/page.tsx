import EditTodoForm from "@/components/EditTodoForm";

interface Params {
  id: string;
}

const getTodoById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to get the todo");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function editTodo({ params }: { params: Params }) {
  const { id } = params;
  const { todo } = await getTodoById(id);
  const { title, description } = todo;
  return <EditTodoForm id={id} title={title} description={description} />;
}
