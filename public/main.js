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

        const taskList = document.getElementById('task-list');

        const taskContainer = document.createElement('div');
        taskContainer.className = 'task';

        const taskName = document.createElement('p');
        taskName.className = 'task-name';
        taskName.textContent = data.name;

        taskContainer.appendChild(taskName);

        const editDeleteTask = document.createElement('div');
        editDeleteTask.className = 'edit-delete';

        const editTask = document.createElement('img');
        editTask.src = './IMG/edit.svg';

        const deleteTask = document.createElement('img');
        deleteTask.src = './IMG/delete.svg';

        editDeleteTask.appendChild(editTask);
        editDeleteTask.appendChild(deleteTask);

        taskContainer.appendChild(editDeleteTask);
        taskList.appendChild(taskContainer);

    } catch(err) {
        console.log(err);
    }
});

