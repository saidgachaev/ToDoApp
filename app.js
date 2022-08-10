
// Получаю элементы из HTML

const button = document.querySelector('.adding-button'),
      input = document.querySelector('.task-input'),
      list = document.querySelector('.items-list');

let newTask = '',
        deleteButton = '';

function createTask () {

    if(input.value != '')
    {
    
    newTask = document.createElement('div');
    list.appendChild(newTask);
    newTask.classList.add('task');
    newTask.id = Math.random();

    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox-style');

    checkbox.addEventListener('click', () => {

        if(textContainer.classList.contains('checkbox-checked')) {
            textContainer.classList.remove('checkbox-checked');
        } else {
            textContainer.classList.add('checkbox-checked');
        }

    })

    let elementContainer = document.createElement('div');
        elementContainer.appendChild(checkbox);
        newTask.appendChild(elementContainer);
        elementContainer.classList.add('element-container');

    const textContainer = document.createElement('div');
    textContainer.innerHTML += input.value;
    elementContainer.appendChild(textContainer);
        

    deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    newTask.appendChild(deleteButton);

    deleteButton.onclick = () => {
        document.querySelector('.task').remove();
    }
    
    input.value = '';
    }
}


button.addEventListener('click', () => {
    createTask();
}) 


input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) 
      {
      createTask();
      }
    })