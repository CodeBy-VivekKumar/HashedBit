import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;

    const updatedList = [...todoList, task];
    updatedList.sort(); // ascending order
    setTodoList(updatedList);
    setTask(''); // clear input
  };

  const handleDeleteTask = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List App</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
