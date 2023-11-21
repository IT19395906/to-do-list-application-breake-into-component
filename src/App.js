
import { useEffect, useState } from 'react';
import './App.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

function App() {

  const [todos, setTodos] = useState(() => {
    const localvalue = localStorage.getItem("ITEMS")
    if(localvalue == null) return []
    
    return JSON.parse(localvalue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currenttodos) => {
      return [
        ...currenttodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }


  function toggleTodo(id, completed) {
    setTodos((currenttodos) => {
      return currenttodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      });
    })
  }

  function deleteTodo(id) {
    setTodos((currenttodos) => {
      return currenttodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <NewTodoForm addTodo={addTodo} />
      <h1 className='header'>To Do List</h1>
      <TodoList list={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
