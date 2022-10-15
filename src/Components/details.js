const Details = ({ todoList, deleteTodo }) => {
	return (
		<div>
			{todoList
				? todoList.map((todo) => {
						return (
							<div key={todo.id}>
								<h2>{todo.title}</h2>
								<h3>{todo.details}</h3>
								<button
									onClick={(e) => {
										deleteTodo(todo.id);
									}}
								>
									Done
								</button>
								<hr></hr>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default Details;
