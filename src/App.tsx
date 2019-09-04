
import TaskTable from './components/TaskTable';
import React, { useState, Fragment } from 'react';
import { Task } from './models/task';
import EditTaskForm from './components/EditTaskForm';
import AddTaskForm from './components/AddTaskForm';


export const App: React.FunctionComponent = () => {
	// Data
	const tasksData : Task[]= [
		{ id: 1, type: 'Diary', patientName: 'Testpatient1', effectiveDate: '20/03/2019' },
		{ id: 2, type: 'Admin',  patientName: 'Testpatient2', effectiveDate: '21/03/2019' },
		{ id: 3, type: 'Diary', patientName: 'Testpatient3', effectiveDate: '22/03/2019' },
	]

	const initialFormState = { id: 1, type: '', patientName: '' , effectiveDate: ''}

	// Setting state
	// useState is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders
	const [ tasks, setTasks ] = useState(tasksData)
	const [ currentTask, setCurrentTask ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addTask = (task:Task) => {
		task.id = tasks.length + 1;
		setTasks([ ...tasks, task ]);
	}

	const deleteTask = (id:number) => {
		setEditing(false);

		setTasks(tasks.filter(task => task.id !== id));
	}

	const updateTask = (id:number, updatedTask:Task) => {
		setEditing(false);

		setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
	}

	const editRow = (task:Task) => {
		setEditing(true);

		setCurrentTask({ id: task.id, type: task.type, patientName: task.patientName , effectiveDate: task.effectiveDate});
	}

	return (
		<div className="container">
			<h1>React Demo App - basic CRUD operations examples </h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit task</h2>
							<EditTaskForm
								setEditing={setEditing}
								currentTask={currentTask}
								updateTask={updateTask}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add task</h2>
              <AddTaskForm
              addTask={addTask}
               />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View tasks</h2>
					<TaskTable tasks={tasks} editRow={editRow} deleteTask={deleteTask} />
				</div>
			</div>
		</div>
	)
}
export default App