
const todoItemToClient = (serverItem) => {
  return {
    id: serverItem.id,
    todoText: serverItem.task,
    todoDate: serverItem.date,
  };
}

export default todoItemToClient;  