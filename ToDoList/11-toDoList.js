let toDoList = JSON.parse(localStorage.getItem('ITEMS')) || [];
let toDoListDates = JSON.parse(localStorage.getItem('DATES')) || [];

function addItem(){
    const itemElement = document.querySelector('.js-add');
    const val = itemElement.value;
    const itemD = document.querySelector('.js-add-date');
    const date = itemD.value;
    if(val === ''){
        return;
    }
    if(date ===''){
        return;
    }
    toDoList.push(val);
    toDoListDates.push(date);

    updateLocalStorage();

    itemElement.value = '';
    itemD.value = '';
    displayList();
}

function displayList(){
    let htmlList = '';
    for(i = 0; i<toDoList.length; i++){
        const element = toDoList[i];
        const date = toDoListDates[i];
        const html = `
            <div>${element}</div>
            <div>${date}</div>
            <button onclick = "
                deleteItem(${i});
            " class = "delete-button">Delete</button>
        `;
        htmlList += html;
    }
    document.querySelector('.js-display-items').innerHTML = htmlList;
}   

function updateLocalStorage(){
    localStorage.setItem('ITEMS', JSON.stringify(toDoList));
    localStorage.setItem('DATES', JSON.stringify(toDoListDates));
}

function deleteItem(index){
    toDoList.splice(index, 1);
    toDoListDates.splice(index, 1);
    updateLocalStorage();
    displayList();
}


displayList();