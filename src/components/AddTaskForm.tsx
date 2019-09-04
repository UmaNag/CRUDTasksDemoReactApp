import React, { useState } from 'react'
import { Task } from 'src/models/task';

interface IAddTask {
     addTask:(task:Task) => void;
   }

export const AddTaskForm: React.FunctionComponent<IAddTask> = ({ addTask }) => {
	const initialFormState:Task = {id:0, type: '', patientName: '', effectiveDate: '' }
	const [ task, setTask ] = useState(initialFormState)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setTask({ ...task, [name]: value });
	}

	const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!task.type || !task.patientName || !task.effectiveDate)
		{
			alert ('please enter type, patient name and date');
			return
		}
		addTask(task);
		setTask(initialFormState);
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
					<td><label>Date</label></td>
					<td><input type="text" name="effectiveDate" value={task.effectiveDate} onChange={handleInputChange} /></td>
				</tr>
				<tr/>
				<button>Add task</button>
			</tbody>
		</table>
		</form>
	)
}

export default AddTaskForm
