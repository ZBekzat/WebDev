const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') return;

    createTask(taskText);
    input.value = '';
});

function createTask(text) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    checkbox.addEventListener('change', function () {
        span.classList.toggle('done');
    });

    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}