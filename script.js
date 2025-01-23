let tasks = []; //Stores all the inputed tasks

function addTask(){ //Adds the tasks to the list
    let taskInput = document.getElementById("taskInput").value;
    console.log(taskInput);
    tasks.push(taskInput);
    console.log(tasks)
    displayTask();
}

function displayTask(){ //Updates the task list
    let updateDisplay = `<div class="task-list">`
    tasks.forEach((i,index)=>{ //Loop to continually add inputs
        updateDisplay += `<div class="task-item">`
        updateDisplay +=`
            <p class="task-text">${index + 1}. ${i}</p> 
            <button onclick="editTask()" class="edit-btn">Edit</button>
            <button onclick="deleteTask(${i})" class="delete-btn">Delete</button>
            `
        updateDisplay += `</div>`
    })
    updateDisplay += `</div>`
    taskDisplay.innerHTML = updateDisplay
}

function deleteTask(index){
    tasks.splice(index,i)
    displayTask();
}

let taskDisplay = document.getElementById("taskList"); //Binds the taskDisplay variable to the taskList element