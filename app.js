
const button = document.querySelector('.adding-button')
const input = document.querySelector('.task-input')
const list = document.querySelector('.items-list')


function createTask () {
    const div = document.createElement('div')
    div.classList.add('task')
    div.innerHTML = input.value

    list.appendChild(div)
    input.value = ''
}



button.addEventListener('click', () => {

    createTask()
}) 


input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) 
      {
      createTask()
      }
    })
   