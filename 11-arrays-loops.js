const todoList = [];

function addItem(){
    const inputItem = document.querySelector('.js-add-item');
    const name = inputItem.value;
    todoList.push(name);
    console.log(todoList);

    inputItem.value = '';

    displayList();
}

function displayList(){
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++){
        const element = todoList[i];
        const html = `
            <p>
                ${element}
                <button onclick = "
                todoList.splice(${i}, 1);
                displayList();
                ">Delete</button>
            </p>
        `;
        todoListHTML += html;
       
    }
    console.log(todoListHTML);
    document.querySelector('.js-display-items').innerHTML = todoListHTML;
}
 