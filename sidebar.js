let sidebarList = document.querySelector('.sidebar-list');
const sidebarButton = document.querySelector('.sidebar-button');

const List = (id, onDelete) => {
    const listElement = document.createElement('div');
    const listElementText = document.createElement('div');
    const listButtonContainer = document.createElement('div');
    const listEditButton = document.createElement('button');
    const listDeleteButton = document.createElement('button');

    listElement.classList.add('sidebar-list-element');
    listElementText.classList.add('sidebar-list-element-text');
    listButtonContainer.classList.add('sidebar-list-button-container');
    listEditButton.classList.add('edit-list-button');
    listDeleteButton.classList.add('delete-list-button');

    listButtonContainer.appendChild(listEditButton);
    listButtonContainer.appendChild(listDeleteButton);
    listElement.appendChild(listElementText);
    listElement.appendChild(listButtonContainer);
    sidebarList.appendChild(listElement);

    listElementText.textContent += 'New list';

    listDeleteButton.onclick = onDelete;

    listElement.id = id;

    return listElement;

}

let elements = [];


const addList = (id) => {
    elements.push({id});
    listsRender();
}

const deleteList = (id) => {
    elements = elements.filter(element => element.id !== id);
    listsRender();
}


const listsRender = () => {
    sidebarList.innerHTML = '';
    elements.forEach(element => sidebarList.appendChild(List(element.id, () => deleteList(element.id))));
};


sidebarButton.addEventListener('click', (e) => {
    e.preventDefault();
    addList(Math.random());

     listsRender();
    
})


listsRender();




// Удалю после проверки, если все будет ок.

// const createList = () => {
//     const listElement = document.createElement('div');
//     const listElementText = document.createElement('div');
//     const listButtonContainer = document.createElement('div');
//     const listEditButton = document.createElement('button');
//     const listDeleteButton = document.createElement('button');

//     listElement.classList.add('sidebar-list-element');
//     listElementText.classList.add('sidebar-list-element-text');
//     listButtonContainer.classList.add('sidebar-list-button-container');
//     listEditButton.classList.add('edit-list-button');
//     listDeleteButton.classList.add('delete-list-button');

//     listButtonContainer.appendChild(listEditButton);
//     listButtonContainer.appendChild(listDeleteButton);
//     listElement.appendChild(listElementText);
//     listElement.appendChild(listButtonContainer);
//     sidebarList.appendChild(listElement);

//     listElementText.textContent += 'New list';

// }

// sidebarButton.addEventListener('click', () => {
//     createList();
// })