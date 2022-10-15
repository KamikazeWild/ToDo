const Details = ({ todoList, deleteTodo }) => {
	return (
		<div>
			{todoList.map((todo) => {
				return (
					<div key={todo}>
						<h2>{todo.title}</h2>
						<h3>{todo.details}</h3>
						{/* <h3>{todo.id}</h3> */}
						<button
							onClick={(e) => {
								deleteodo(todo.id);
							}}
						>
							Done
						</button>
						<hr></hr>
					</div>
				);
			})}
		</div>
	);
};

export default Details;
