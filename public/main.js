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
        console.log(data);

    } catch(err) {
        console.log(err);
    }
});

