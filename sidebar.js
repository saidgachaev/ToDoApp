let sidebarList = document.querySelector('.sidebar-list');
const sidebarButton = document.querySelector('.sidebar-button');

const List = (id, name, selected, onDelete, onChange, onSelect) => {
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

    if (selected) {
        listElement.classList.add('sidebar-list-element-active');
    }

    listButtonContainer.appendChild(listEditButton);
    listButtonContainer.appendChild(listDeleteButton);
    listElement.appendChild(listElementText);
    listElement.appendChild(listButtonContainer);
    sidebarList.appendChild(listElement);


    listElementText.textContent += name;

    listDeleteButton.onclick = onDelete;

    listElement.id = id;


    listElement.addEventListener('click', onSelect);
    
    
    // onclick = (event) => {
    //     event.preventDefault();
    //     onSelect();
    // }

    listEditButton.onclick = () => {

        const buffer = listElementText.innerText;
        const editInput = document.createElement('input');

        listElementText.innerText = '';
        listElementText.appendChild(editInput);

        editInput.setAttribute('type', 'text');
        editInput.value = buffer;
        editInput.focus();


        editInput.addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
                onChange(editInput.value);
            }
        })

        editInput.addEventListener('blur', () => {
            onChange(editInput.value);
        })

    }

    return listElement;

}

let lists = [];
let selectedList = [];


const addList = (id, name = 'New list') => {
    lists.push({id, name});
    listsRender();
}

const deleteList = (id) => {
    lists = lists.filter(list => list.id !== id);
    listsRender();
}

const changeList = (id, name = 'New list') => {
    lists.forEach(list => {
        if (list.id === id) {
            list.name = name;
        }
    })
    listsRender();
}

const selectList = (id) => {
    lists.forEach(list => {
        if (list.id === id) {

            selectedList = list;
        }
    })
    listsRender();
}

const listsRender = () => {
    sidebarList.innerHTML = '';
    lists.forEach(list => {
        let isListSelected = selectedList.id === list.id;
        sidebarList.appendChild(List(list.id, list.name, 
            isListSelected,

            () => deleteList(list.id), 
        
            (name) => changeList(list.id, name),

            () => selectList(list.id)

            ));
    }
        
        );
};


sidebarButton.addEventListener('click', (e) => {
    e.preventDefault();
    addList(Math.random());

     listsRender();
    
})

listsRender();
