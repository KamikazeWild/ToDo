const Form = ({ addTodo }) => {
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.target);
					addTodo(formData);
					e.target.reset();
				}}
			>
				<label htmlFor="title">
					Task
					<input type="text" name="task" id="task"></input>
				</label>
				<label htmlFor="details">
					Details
					<input type="text" name="details" id="detials"></input>
				</label>
				<button onClick={(e) => addTodo}>Add Todo</button>
			</form>
		</div>
	);
};

export default Form;
