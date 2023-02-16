import React, { useState } from 'react';
import "./styles/main.css";
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { BiUndo } from 'react-icons/bi';
import { MdDoneOutline } from 'react-icons/md';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      alert('Please enter a todo!');
      return;
    }
    setTodos([...todos, { text: newTodo, done: false }]);
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
    <div className='All'>
      <h1>Please Add your Tasks !</h1>
      <form onSubmit={handleSubmit}>
        <div className='c1'>
          <input
            placeholder='Add a Todo...'
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>

      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className='c2'>
              {todo.done ? <del>{todo.text}</del> : todo.text}
              <div className='c2-1'>
                <div onClick={() => handleDone(index)}>
                  {todo.done ? <BiUndo /> : <MdDoneOutline />}
                </div>
                <div onClick={() => handleDelete(index)}>
                  <RiDeleteBin5Fill />
                </div>
              </div>

            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
