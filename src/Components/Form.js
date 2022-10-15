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
					{" "}
					title &nbsp;
					<input type="text" name="title" id="title"></input>
					&nbsp;
				</label>
				<label htmlFor="details">
					{" "}
					Details &nbsp;
					<input type="text" name="details" id="detials"></input>
					&nbsp;
				</label>
				<button
					onClick={(e) => {
						addTodo;
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
