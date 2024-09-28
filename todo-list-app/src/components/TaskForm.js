import React, { useState, useEffect } from 'react';

function TaskForm({ task, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    assignedTo: '',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    description: ''
  });

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label>Assigned To:</label>
        <input 
          type="text" 
          name="assignedTo" 
          value={formData.assignedTo} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label>Due Date:</label>
        <input 
          type="date" 
          name="dueDate" 
          value={formData.dueDate} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Priority:</label>
        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-actions">
        <button type="submit" className="save-btn">Save</button>
        <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
      </div>
    </form>
  );
}

export default TaskForm;