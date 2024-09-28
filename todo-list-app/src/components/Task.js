import React from 'react';

function Task({ task, onEdit, onDelete }) {
  return (
    <tr>
      <td><input type="checkbox" checked={task.status === 'Completed'} readOnly /></td>
      <td>{task.assignedTo}</td>
      <td>{task.status}</td>
      <td>{task.dueDate}</td>
      <td>{task.priority}</td>
      <td>{task.description}</td>
      <td>
        <button onClick={() => onEdit(task)} className="edit-btn">Edit</button>
        <button onClick={() => onDelete(task)} className="delete-btn">Delete</button>
      </td>
    </tr>
  );
}

export default Task;