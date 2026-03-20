
const todoItemToClient = (serverItem) => {
  return {
    id: serverItem._id,
    todoText: serverItem.task,
    todoDate: serverItem.date,
    completed: serverItem.completed
  };
}

export default todoItemToClient;  