import React from 'react'
import { Task } from 'src/models/task';

interface ITaskTable {
  tasks:Task[];
  editRow:(task:Task) => void;
  deleteTask:(id:number) => void;
 }

 export const TaskTable: React.FC<ITaskTable> = ({tasks, editRow, deleteTask}) =>
 {
   return (
    <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Patientname</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <tr key={task.id}>
            <td>{task.type}</td>
            <td>{task.patientName}</td>
            <td>{task.effectiveDate}</td>
            <td>
              <button
               onClick={() => editRow(task)}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No tasks</td>
        </tr>
      )}
    </tbody>
  </table>
   )
 }

export default TaskTable