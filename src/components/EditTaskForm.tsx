import React, { useState } from 'react'
import { Task } from 'src/models/task';


interface IEditTask {
  setEditing:React.Dispatch<React.SetStateAction<boolean>>
  currentTask:Task
  updateTask:(id:number, task:Task) => void;
 }
  export const EditTaskForm : React.FunctionComponent<IEditTask> = ({setEditing, currentTask,updateTask}) => {
  const [ task, setTask ] = useState(currentTask);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  }

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTask(task.id, task);
  }

  const onClickUpdateHandler = () => {
    setEditing(false);
  }

  return (
    <form
    onSubmit={formSubmit}
    >
      <table>
        <tbody>
          <tr>
            <td><label>Type</label></td>
			      <td><input type="text" name="type" value={task.type} onChange={handleInputChange} /></td>
          </tr>
          <tr>
			      <td><label>Patientname</label></td>
			      <td><input type="text" name="patientName" value={task.patientName} onChange={handleInputChange} /></td>
            </tr>
          <tr>
            <td><label>EffectiveDate</label></td>
			      <td><input type="text" name="effectiveDate" value={task.effectiveDate} onChange={handleInputChange} /></td>
          </tr>
          <tr/>
        <td><button>Update task</button></td>
        <td><button onClick={ onClickUpdateHandler } className="button muted-button">
        Cancel
      </button></td>
      </tbody>
      </table>
    </form>
  )
}

export default EditTaskForm
