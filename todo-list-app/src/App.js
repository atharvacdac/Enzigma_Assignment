import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, assignedTo: 'Atharva', status: 'Completed', dueDate: '2024-09-29', priority: 'Normal', description: 'Complete the given Assignment' },
    { id: 2, assignedTo: 'John', status: 'In Progress', dueDate: '2024-09-29', priority: 'Normal', description: 'Prepare presentation slides' }
  ]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setIsFormVisible(false);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id));
  };

  const editTask = (taskToEdit) => {
    setEditingTask(taskToEdit);
    setIsFormVisible(true);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null);
    setIsFormVisible(false);
  };

  return (
    <div className="App">
      <h1>To Do List Assignment</h1>
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
      <button onClick={() => setIsFormVisible(true)} className="new-task-btn">New Task</button>
      {isFormVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingTask ? 'Edit Task' : 'New Task'}</h2>
            <TaskForm 
              task={editingTask} 
              onSave={editingTask ? updateTask : addTask} 
              onCancel={() => {
                setIsFormVisible(false);
                setEditingTask(null);
              }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;