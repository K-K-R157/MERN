import TodoItem from './TodoItem'

const TodoItems=()=>{
        let items=[
        {id: 1,todoText:'Add milk', todoDate:'29/08/2023'},
        {id: 2,todoText:'Go to College', todoDate:'weekday'}
    ]

    return <>
        {items.map(item=><TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>)}
    </>
}

export default TodoItems;