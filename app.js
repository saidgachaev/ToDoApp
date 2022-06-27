
const button = document.querySelector('.adding-button')

button.addEventListener('click', () =>{
    const input = document.querySelector('.task-input').value

    const div = document.createElement("div");
    div.innerHTML = input;
    
    document.querySelector('.items-list').appendChild(div);
})