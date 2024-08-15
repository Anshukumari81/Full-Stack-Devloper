document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);

        taskInput.value = '';
    });

    taskList.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('delete')) {
            target.parentElement.remove();
        }

        if (target.classList.contains('edit')) {
            const taskTextElement = target.previousElementSibling;
            const newTaskText = prompt('Edit task:', taskTextElement.textContent);

            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskTextElement.textContent = newTaskText.trim();
            }
        }
    });
});
