
const sidebarList = document.querySelector('.sidebar-list');
const sidebarButton = document.querySelector('.sidebar-button');
const INBOX_LIST_ID = 1;

const List = (id, name, selected, onDelete, onChange, onSelect, disabled, tasksCount) => {
    const listElement = document.createElement('div');
    const listElementText = document.createElement('div');
    const listButtonContainer = document.createElement('div');
    const listEditButton = document.createElement('button');
    const listDeleteButton = document.createElement('button');
    const tasksCountSpan = document.createElement('span');

    listElement.classList.add('sidebar-list-element');
    listElementText.classList.add('sidebar-list-element-text');
    listButtonContainer.classList.add('sidebar-list-button-container');
    listEditButton.classList.add('edit-list-button');
    listDeleteButton.classList.add('delete-list-button');

    listButtonContainer.appendChild(tasksCountSpan);

    if (tasksCount) {
        tasksCountSpan.innerHTML = tasksCount;
    }

    if (selected) {
        listElement.classList.add('sidebar-list-element-active');
        header.innerHTML = name;
    }

    if (!disabled) {
        listButtonContainer.appendChild(listEditButton);
        listButtonContainer.appendChild(listDeleteButton);
    }

    sidebarList.appendChild(listElement);
    listElement.appendChild(listElementText);
    listElement.appendChild(listButtonContainer);

    listElementText.textContent += name;

    listElement.id = id;

    listElement.addEventListener('click', onSelect);
    listDeleteButton.addEventListener('click', onDelete);
    
    listEditButton.onclick = (e) => {

        e.stopPropagation()
        const buffer = listElementText.innerText;
        const editInput = document.createElement('input');

        listElementText.innerText = '';
        listElementText.appendChild(editInput);

        editInput.setAttribute('type', 'text');
        editInput.value = buffer;
        editInput.focus();

        editInput.onclick = (e) => {
            e.stopPropagation();
        }


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

let lists = [{id: INBOX_LIST_ID, name: 'Inbox'}];

let selectedList = [];

const addList = (id, name = 'New list') => {
    lists.push({id, name});
    listsRender();
    selectList(id);
  }


const deleteList = (id) => {
    lists = lists.filter(list => list.id !== id);
    listsRender();
    selectList(INBOX_LIST_ID);
    tasks.forEach((task) => {
        if (task.taskListId === id) {
            task.taskListId = INBOX_LIST_ID;
        }
    })
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
    });
    tasksRender();
    listsRender();
  }

const listsRender = () => {
        sidebarList.innerHTML = '';
        lists.forEach(list => {
        let isListSelected = selectedList.id === list.id;
        let isButtonsDisabled = list.id === INBOX_LIST_ID;
        
        const tasksCount = tasks.filter(task => task.taskListId === list.id).length;

        sidebarList.appendChild(List(list.id, list.name,
            isListSelected,

            () => deleteList(list.id), 
        
            (name) => changeList(list.id, name),

            () => selectList(list.id),

            isButtonsDisabled,

            tasksCount

            ));
    }
        
        );
        
};

sidebarButton.addEventListener('click', (e) => {
    e.preventDefault();
    addList(Math.random());

     listsRender();
    
})

selectList(INBOX_LIST_ID);
listsRender();
