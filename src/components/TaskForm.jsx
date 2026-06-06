import { useState } from "react";

function TaskForm({addTask}) {

    const [task,setTask] = useState("");
    const [error,setError] = useState("");

    function handleAdd(){

        if(task.trim() === ""){
            setError("Task cannot be empty");
            return;
        }

        if(task.length > 100){
            setError("Task must not exceed 100 characters");
            return;
        }

        addTask(task);

        setTask("");
        setError("");
    }

    return (
        <div className="card p-4 mt-4">

            <h4>Add Task</h4>

            <input
            className="form-control my-3"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder="Task name"
            />

            <div className="text-danger">
                {error}
            </div>

            <button
            className="btn btn-primary mt-3"
            onClick={handleAdd}>
                Add
            </button>

        </div>
    )
}

export default TaskForm