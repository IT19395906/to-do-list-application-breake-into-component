import { TodoItem } from "./TodoItem"

export function TodoList({list, toggleTodo, deleteTodo}) {
    return <ul className='list'>
    {list.length === 0 && "no todo"}
    {list.map((todo) => {
      return <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    })}
  </ul>
}