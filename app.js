// Получаем элементы из HTML

const list = document.querySelector(".items-list");
const button = document.querySelector(".adding-button");
const input = document.querySelector(".task-input");



const Task = (id, text, checked, onDelete, onCheckboxChange) => {
    const task = document.createElement('div')
    const textContainer = document.createElement('div');
    const elementContainer = document.createElement('div');
    const deleteButton = document.createElement('button')
    const checkbox = document.createElement('input');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox-style');
    checkbox.onclick = onCheckboxChange;
    checkbox.checked = checked;

    textContainer.innerHTML += text;
    if (checked) {
        textContainer.classList.add('checkbox-checked');
    }

    elementContainer.appendChild(checkbox);
    elementContainer.appendChild(textContainer);
    elementContainer.classList.add('element-container');

    deleteButton.classList.add('delete-button');
    deleteButton.onclick = onDelete;

    task.classList.add('task');
    task.id = id;
    task.appendChild(elementContainer);
    task.appendChild(deleteButton);

    return task;
}

let tasks = [];

const addTask = (id, text) => {
    tasks.push({ id, text, checked: false });
    render();
}

const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    render();
}

const toggleTask = (id) => {
    tasks.forEach(task => {
        if (task.id === id) {
            task.checked = !task.checked;
        }
    })
    render();
}


const render = () => {
    list.innerHTML = '';
    tasks.forEach(task => list.appendChild(Task(task.id, task.text, task.checked, () => deleteTask(task.id), () => toggleTask(task.id))));
};


button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value) addTask(Math.random(), input.value);
    input.value = '';
})

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13 && input.value) 
      {
        addTask(Math.random(), input.value);
        input.value = '';
      }
    });

render();
