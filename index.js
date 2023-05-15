const removeTask = taskId => {
    console.log(taskId);
    document.getElementById("tasks").removeChild(document.getElementById(taskId));
};