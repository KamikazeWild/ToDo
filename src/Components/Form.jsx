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
					Title
					<input type="text" name="title" id="title"></input>
				</label>
				<label htmlFor="details">
					Details
					<input type="text" name="details" id="detials"></input>
				</label>
				<button onClick={(e) => addTodo}>Submit</button>
			</form>
		</div>
	);
};

export default Form;
