const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskSpan.style.textDecoration = 'line-through';
                taskSpan.style.color = 'gray';
                taskList.appendChild(taskItem);
            } else {
                taskSpan.style.textDecoration = 'none';
                taskSpan.style.color = 'black';
                taskList.prepend(taskItem);
            }
        });
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});