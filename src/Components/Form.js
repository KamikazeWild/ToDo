const Form = (addTodo) => {
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault;
					const formData = new FormData(e.target);
					addTodo(formData);
				}}
			>
				<label htmlFor="todo">
					{" "}
					Title &nbsp;
					<input type="text" name="todo" id="todo"></input>
					&nbsp;
				</label>
				<label htmlFor="details">
					{" "}
					Details &nbsp;
					<input type="text" name="details" id="detials"></input>
					&nbsp;
				</label>
				<button onClick={addTodo}>Submit</button>
			</form>
		</div>
	);
};

export default Form;
