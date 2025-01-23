let tasks = []; //Stores all the inputed tasks


function addTask(){ //Adds the tasks to the list
    let taskInput = document.getElementById("taskInput").value;
    console.log(taskInput);
    tasks.push(taskInput);
    console.log(tasks)
    displayTask();
}

function displayTask(){ //Updates the task list
    let taskDisplay = document.getElementById("taskList"); //Binds the taskDisplay variable to the taskList element
    let updateDisplay = ``;
    updateDisplay += '<div class="task-list">'
    for(let i=0; i<tasks.length; i++){ //Loop to continually add inputs
        updateDisplay += 
            `<div class="task-item">
            <p class="task-text">${i + 1}. ${tasks[i]}</p> 
            <button onclick="editTask(${i})" class="edit-btn">Edit</button>
            <button onclick="deleteTask(${i})" class="delete-btn">Delete</button>
            </div>
            `
    }
     
    taskDisplay.innerHTML = updateDisplay
}

function deleteTask(index){
    tasks.splice(index,1)
    displayTask();
}

function editTask(index){
    const newTask=prompt('Edit Task', tasks[index]);
    console.log(newTask);
    tasks[index]=newTask.trim();
    displayTask();
}
