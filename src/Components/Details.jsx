const Details = ({ todoList, deleteTodo }) => {
	return (
		<div>
			<ul>
				{todoList
					? todoList.map((todo) => {
							return (
								<div key={todo.id}>
									<li>
										<h2 id="todo-title">{todo.title}</h2>
										<strong id="todo-details">{todo.details}</strong>
										<button
											id="done"
											onClick={(e) => {
												deleteTodo(todo.id);
											}}
										>
											Done
										</button>
									</li>
								</div>
							);
					  })
					: null}
			</ul>
		</div>
	);
};

export default Details;
