import { useEffect, useState } from "react";
import Form from "./Components/Form";
// import Details from "./Components/details";
import { v4 as uuid } from "uuid";

function Todo() {
	const [todoList, setTodoList] = useState([]);
	// localStorage.getItem("todoList")

	const addTodo = (formData) => {
		const title = formData.get("title");
		const details = formData.get("details");
		const id = uuid();
		const newTodoList = [...todoList, { title, details, id }];
		setTodoList(newTodoList);
	};

	const deleteTodo = (id) => {
		const newTodoList = todoList.filter(function (obj) {
			return obj.id !== id;
		});
		setTodoList(newTodoList);
	};

	// useEffect(() => {
	// 	if (todoList.length !== null) {
	// 		localStorage.setItem("todoList", JSON.stringify(todoList));
	// 	}
	// }, [todoList]);

	// console.log(todoList.length);
	// console.log(localStorage.getItem("todoList"));

	return (
		<div>
			<h1>ToDo List</h1>
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
					<button onClick={addTodo}>Submit</button>
				</form>
			</div>
			{/* <Form addTodo /> */}
			<div>
				{todoList.map((todo) => {
					return (
						<div key={todo}>
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
				})}
			</div>
			{/* <Details todoList={todoList} removeTodo /> */}
		</div>
	);
}

export default Todo;
