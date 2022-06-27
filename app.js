
const button = document.querySelector('.adding-button')
const input = document.querySelector('.task-input')
const list = document.querySelector('.items-list')

button.addEventListener('click', () => {

    const div = document.createElement('div')
    div.classList.add('task')
    div.innerHTML = input.value

    list.appendChild(div)
    input.value = ''
}) 

