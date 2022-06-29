
const button = document.querySelector('.adding-button')
const input = document.querySelector('.task-input')
const list = document.querySelector('.items-list')
const task = document.querySelector('.task')




function createTask () {

    if(input.value != '')
    {
    const div = document.createElement('div')
    div.classList.add('task')
    div.innerHTML = input.value
    list.appendChild(div)

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    task.appendChild(deleteButton)
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
