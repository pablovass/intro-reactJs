import axios from "axios";
const tasksApi = axios.create({
    baseURL: 'http://localhost:8080/api/persons'
})

export const getAllTasks = () => {
    //return axios.get('https://api.publicapis.org/entries');
    return tasksApi.get()
}
export const createTask = (task) => {
    return tasksApi.post("/", task)
}
export const disableTask = (id) => tasksApi.delete(`/${id}/disable`);

//export const updateTask = (task) => tasksApi.put("/update", task);

export const getTask =(id)=>tasksApi.get(`/${id}`);

export const updateTask = (task) => {
    return tasksApi.patch("/update", task)
}