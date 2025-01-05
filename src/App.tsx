// import { useState } from 'react';

import Todos from './components/Todos'
// import Todo from './models/todos'
import NewTodo from './components/NewTodo';

import TodosContextProvider from './store/todos-context';

function App() {
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn Typescript')
  // ];

  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos(
  //     (prevTodos) => {
  //       return prevTodos.concat(newTodo)
  //     }
  //   );
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos(
  //     (prevTodos) => {
  //       return prevTodos.filter(
  //         todo => todo.id !== todoId
  //       );
  //     }
  //   );
  // }

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
