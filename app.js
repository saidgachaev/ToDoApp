
const button = document.querySelector('.adding-button')
const input = document.querySelector('.task-input')
const list = document.querySelector('.items-list')



  
function createTask () {

    if(input.value != '')
    {
    const createElement = document.createElement('div')
    createElement.classList.add('task')
    createElement.innerHTML = input.value
    list.appendChild(createElement)
    createElement.id = Math.random()

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    createElement.appendChild(deleteButton)
    deleteButton.onclick = () => {
        document.getElementById(createElement.id).remove()
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