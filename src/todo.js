import { useEffect, useState } from "react";
// import Form from "./Components/Form";
// import Details from "./Components/details";
import { v4 as uuid } from "uuid";
import ErrorBoundary from "./Components/ErrorBoundary";

function Todo() {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem("todoList"))
	);

	const addTodo = (formData) => {
		const title = formData.get("title");
		const details = formData.get("details");
		const id = uuid();
		let newTodoList = [];

		if (todoList) {
			newTodoList = [...todoList, { title, details, id }];
		} else {
			newTodoList = [{ title, details, id }];
		}
		setTodoList(newTodoList);
	};

	const deleteTodo = (id) => {
		const newTodoList = todoList.filter(function (obj) {
			return obj.id !== id;
		});
		setTodoList(newTodoList);
	};

	useEffect(() => {
		if (todoList) {
			localStorage.setItem("todoList", JSON.stringify(todoList));
		}
	}, [todoList]);

	// console.log(todoList);
	// console.log(localStorage.getItem("todoList"));

	return (
		<div>
			<h1>ToDo List</h1>
			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						const formData = new FormData(e.target);
						// console.log({formData})
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
						<input type="text" name="details" id="details"></input>
						&nbsp;
					</label>
					<button>Submit</button>
				</form>
			</div>
			{/* <ErrorBoundary>
				<Form addTodo />
			</ErrorBoundary> */}
			<div>
				{todoList
					? todoList.map((todo) => {
							return (
								<div key={todo.id}>
									<h2>{todo.title}</h2>
									<h3>{todo.details}</h3>
									{/* <h3>{todo.id}</h3> */}
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
			{/* <Details todoList={todoList} removeTodo /> */}
		</div>
	);
}

export default Todo;
