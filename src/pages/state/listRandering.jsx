import React, { useState } from "react";

const ListRendering = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Learn React" },
        { id: 2, title: "Build Project" },
    ]);

    const [newTaskTitle, setNewTaskTitle] = useState(""); // 🔸 State to hold input value

    // 🔹 Called when typing in the input
    const handleInputChange = (e) => {
        setNewTaskTitle(e.target.value); // 🔸 Set input field value to state
    };

    // 🔹 To add a new task
    const addTask = () => {
        if (newTaskTitle.trim() === "") return; // Do nothing if input is empty

        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
        };

        setTasks([...tasks, newTask]); // 🔸 Add new task to existing ones
        setNewTaskTitle(""); // 🔸 Clear the input field
    };

    // 🔹 To remove a task
    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            {/* 🔸 Input field */}
            <input
                type="text"
                placeholder="Enter task"
                value={newTaskTitle}
                onChange={handleInputChange}
            />

            {/* 🔸 Add task button */}
            <button onClick={addTask}>Add Task</button>

            {/* 🔸 Show task list */}
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
