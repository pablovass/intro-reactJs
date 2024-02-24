import { useNavigate } from "react-router-dom";

export function TaskCard({ tasks }) {
  const navigate = useNavigate();
  return (
    <div
      className="gb-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-poiter"
      onClick={() => {
        navigate("/tasks/" + tasks.id);
      }}
    >
      <h1 className="font-bold uppercase">{tasks.name}</h1>
      <p className="text-slate-400">{tasks.email}</p>
    </div>
  );
}
