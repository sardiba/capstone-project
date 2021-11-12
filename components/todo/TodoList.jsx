import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

export const TodoList = ({ todos, setTodos }) => {
  const toggleClick = (id) => {
    console.log("**ID**", id);
    const clickedIndex = (element) => element.id == id;
    const todoIndex = todos.findIndex(clickedIndex);
    const newTodoArray = [...todos];
    console.log("newTodoArray", newTodoArray, todoIndex);

    newTodoArray[todoIndex].isDone
      ? (newTodoArray[todoIndex].isDone = false)
      : (newTodoArray[todoIndex].isDone = true);
    setTodos([...newTodoArray]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id != id); // new array consists of undeleted todos
    setTodos(updatedTodos);
  };

  const todoItems = todos.map(({ id, name, isDone }) => {
    return (
      <TodoItem
        key={id}
        name={name}
        id={id}
        isDone={isDone}
        deleteTodo={deleteTodo}
        toggleClick={toggleClick}
      />
    );
  });

  return (
    <>
      <div>{todoItems}</div>
      <CreateTodo
        onCreate={(name) => {
          setTodos([...todos, { id: uuidv4(), name, isDone: false }]);
        }}
      />
    </>
  );
};

export const todoCounter = (todos) => {
  const finishedTask = todos.filter((todo) => todo.isDone).length;
  const allTask = todos.length;
  return finishedTask / allTask;
};

export const todoCounterInString = (todos) => {
  const finishedTask = todos.filter((todo) => todo.isDone).length;
  const allTask = todos.length;
  return (
    <span>
      {finishedTask} / {allTask}
    </span>
  );
};
