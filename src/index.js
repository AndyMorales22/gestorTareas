import { renderTasks } from "./ui";
import { addTask, deleteTask, updateTask } from "./task";

document.addEventListener("DOMContentLoaded", () => {
    //hacemos visible la lista de tareas
    renderTasks();
    
    //agregar el evento para la función para agregar tareas
    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput=document.getElementById("task-input");
        if(taskInput.value !== "") {
            //Agregamos la tarea
            addTask(taskInput.value);

            //Volvemos a cargar la lista de tareas
            renderTasks();

            //limpiar el imput
            document.getElementById("task-input").value = "";
        }
    });

    //agregar el evento para los botones
    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id")
            deleteTask(taskId);
            renderTasks();
        }

        if(e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            updateTask(taskId);
            renderTasks();
        }
    });
});