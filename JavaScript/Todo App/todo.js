
todoList=[{item:'this',duedate:'29-04-2025'},{item:'that',duedate:'30-04-2025'}];

displayItems();

function addTodo(){
    inputText=document.querySelector('#todo-input');
    inputDate=document.querySelector('#todo-date');
    let todoItem=inputText.value;
    let todoDate=inputDate.value;

    todoList.push({item:todoItem,duedate:todoDate});
    inputDate.value='';
    inputText.value='';

    displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    containerElement.value='';

    let newhtml='';

    for(let i=0;i<todoList.length;i++){
       let {item,duedate}=todoList[i];
       newhtml+=`
            <span>${item}</span>
            <span>${duedate}</span>
            <button onclick="todoList.splice(${i},1);
            displayItems();"  class="delete-button">delete</button>
       `;
    }
    containerElement.innerHTML=newhtml;
}
