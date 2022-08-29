let sidebarLists = document.querySelector('.sidebar-list');
const sidebarButton = document.querySelector('.sidebar-button');

sidebarButton.addEventListener('click', () => {
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
    sidebarLists.appendChild(listElement);

    listElementText.textContent += 'New list';
})

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
//     sidebarLists.appendChild(listElement);

//     listElementText.textContent += 'New list';

// }

// sidebarButton.addEventListener('click', () => {
//     createList();
// })