import React, { useState, useEffect } from "react";

const ListRendering = () => {
    const [tasks, setTasks] = useState(() => {
        // 🔹 Get saved tasks from localStorage on first load
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTaskTitle, setNewTaskTitle] = useState("");

    // 🔸 Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (e) => {
        setNewTaskTitle(e.target.value);
    };

    const addTask = () => {
        if (newTaskTitle.trim() === "") return;

        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
        };

        setTasks([...tasks, newTask]);
        setNewTaskTitle("");
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>

            <input
                type="text"
                placeholder="Enter task"
                value={newTaskTitle}
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => removeTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRendering;
