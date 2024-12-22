import React, { useState } from "react";
import "../../kanban.css"
const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: "1", name: "Tâche 1", status: "todo" },
    { id: "2", name: "Tâche 2", status: "in-progress" },
    { id: "3", name: "Tâche 3", status: "done" },
  ]);

  const [hoveredColumn, setHoveredColumn] = useState(""); // Colonne survolée

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task,status});
    }
    setHoveredColumn(""); // Réinitialise l'effet après le dépôt
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleDragOver = (e, status) => {
    e.preventDefault();
    setHoveredColumn(status); // Définit la colonne en survol
  };

  return (
    <div className="kanban-container">
      {["todo", "in-progress", "done"].map((status) => (
        <div
          key={status}
          onDrop={(e) => handleDrop(e, status)}
          onDragOver={(e) => handleDragOver(e, status)}
          className={`kanban-column ${
            hoveredColumn === status ? "hovered" : ""
          }`} // Applique la classe si la colonne est survolée
        >
          <h2 className="column-title">{status.toUpperCase()}</h2>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                className="kanban-task"
              >
                {task.name}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
