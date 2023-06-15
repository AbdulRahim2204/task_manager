// this code is used to send a post request to the server and handel the respons
const getTask = document.querySelector('form');

getTask.addEventListener('submit', async (e) => {
    e.preventDefault();
    const task = getTask.task.value;

    try{
        const res = await fetch('../add-task', {
            method: 'POST',
            body: JSON.stringify({taskName: task}),
            headers: {'Content-Type': 'application/json'}
        })

        const data = await res.json();

        // this element contain all tasks that in the app
        const taskList = document.getElementById('task-list');

        // this element is the container of the new task that has been added to the db
        const taskContainer = document.createElement('div');
        taskContainer.className = 'task';
        taskContainer.dataset.taskid = data._id;

        // this element contain the task name
        const taskName = document.createElement('p');
        taskName.className = 'task-name';
        taskName.textContent = data.name;

        // appending the task name inside the task container
        taskContainer.appendChild(taskName);

        // this element contain the edit and delete button
        const editDeleteTask = document.createElement('div');
        editDeleteTask.className = 'edit-delete';

        // creating the edit button
        const editTask = document.createElement('img');
        editTask.src = './IMG/edit.svg';

        // creating the delete button
        const deleteTask = document.createElement('img');
        deleteTask.src = './IMG/delete.svg';

        // appending the edit and delete button inside there container
        editDeleteTask.appendChild(editTask);
        editDeleteTask.appendChild(deleteTask);

        // append the edit and delete container
        taskContainer.appendChild(editDeleteTask);

        // append the new task inside the tasks list
        taskList.appendChild(taskContainer);

    } catch(err) {
        console.log(err);
    }
});

// this code is used to send a delet request to the server
const deleteTask = document.getElementById('delete');

deleteTask.addEventListener('click', async () => {
    try{
        deleteUri = `../delete-task/${newTaskId}`;
        const res = await fetch(deleteUri, {method: 'DELETE'});

    } catch(err){
        console.log(err);
    }
})