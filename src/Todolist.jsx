import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      alert('Please enter a todo!');
      return;
    }
    setTodos([...todos, {text: newTodo, done: false}]);
    setNewTodo('');
  };

  const handleDone = (index) => {
    const newTodos = [...todos];
    const [removed] = newTodos.splice(index, 1);
    removed.done = !removed.done;
    if (removed.done) {
      newTodos.push(removed);
    } else {
      newTodos.unshift(removed);
    }
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.done ? <del>{todo.text}</del> : todo.text}
            <button onClick={() => handleDone(index)}>
              {todo.done ? 'Undone' : 'Done'}
            </button>
            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
