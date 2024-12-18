document.getElementById('add-task-btn')?.addEventListener('click',function(){
   const taskTitle = document.getElementById('task-title').value;
   const taskDesc = document.getElementById('task-desc').value;


   if(taskTitle && taskDesc){
    const task = {
        title: taskTitle,
        description: taskDesc,
    };
    addTaskStorage(task);
    window.location.href = 'task.html';

   }


});



function listTask(){
    const taskListBody = document.getElementById('task-list').getElementsByTagName('tbody')[0];
    taskListBody.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

     tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.classList.toggle('completed',task.completed);

     row.innerHTML = `
      <td>${task.title}</td>
      <td>${task.description}</td>
      <td>
      <button class="complete-btn btn btn-success" onclick="completeTask(${index})">Complete</button>
      <button class="delete-btn btn btn-danger" onclick="deleteTask(${index})">Delete</button>
      </td>
      
     `;

     taskListBody.appendChild(row)
      
   });
}




function addTaskStorage(task){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

function  completeTask(index){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks',JSON.stringify(tasks));
    listTask();
    
}


function  deleteTask(index){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    listTask();

}



if(window.location.pathname.endsWith('task.html')){
    listTask();
}





