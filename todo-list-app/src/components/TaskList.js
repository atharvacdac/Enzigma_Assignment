import React from 'react';
import Task from './Task';

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <table className="task-list">
      <thead>
        <tr>
          <th></th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Comments</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;