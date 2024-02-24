// esto es un componentes que a fines practicos esta en la raiz
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function User({ user }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-white p-4 rounded-md shadow-md text-black"
    >
      <h1>{user.name}</h1>
    </div>
  );
}
