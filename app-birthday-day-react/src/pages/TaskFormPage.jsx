import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, disableTask,updateTask,getTask } from "../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateTask(data);
      toast.success('update exitoso');
    } else {
      await createTask(data);

      toast.success('tarea creada',{
      position:"bottom-right",
      style:{
        background:"#101010",
        color:"#fff"
      }});
    }
    navigate("/tasks");
  });
useEffect(()=>{
 async function loadTask(){
    if(params.id){
     const res= await getTask(params.id);
     setValue('name',res.data.name)
     setValue('lastName',res.data.lastName)
     setValue('birthdate',res.data.birthdate)
     setValue('documentNumber',res.data.documentNumber)
     setValue('email',res.data.email)
     setValue('phone',res.data.phone)
     console.log(res);
    }
  }
  loadTask();
},[]);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.name && <span>this field is required</span>}

        <input
          type="text"
          placeholder="lastName"
          {...register("lastName", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          {...register("birthdate", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />

        <input
          type="text"
          placeholder="documentNumber"
          {...register("documentNumber", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        <input
          type="text"
          placeholder="email"
          {...register("email", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        <input
          type="text"
          placeholder="phone"
          {...register("phone", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />

        <button
        className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
        {params.id && (
          <div className="flex justify-end">
            <button
          className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("are you sure?");
              if (accepted) {
                await disableTask(params.id);
                toast.success('tarea Eliminada',{
                  position:"bottom-right",
                  style:{
                    background:"#101010",
                    color:"#fff"
                  }});
                navigate("/task");
              }
            }}
          >
            Delete
          </button>
          </div>
        )}
      </form>
    </div>
  );
}
