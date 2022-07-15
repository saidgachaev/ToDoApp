
const button = document.querySelector('.adding-button')
const input = document.querySelector('.task-input')
const list = document.querySelector('.items-list')



  
function createTask () {

    if(input.value != '')
    {
    const newTask = document.createElement('div')
    newTask.classList.add('task')
    newTask.innerHTML = input.value
    list.appendChild(newTask)
    newTask.id = Math.random()

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    newTask.appendChild(deleteButton)
    deleteButton.onclick = () => {
        document.getElementById(newTask.id).remove()
    }
    
    input.value = ''
    }
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