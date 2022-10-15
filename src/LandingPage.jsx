import { useState, useEffect } from "react";
import Form from "./Components/Form";
import Details from "./Components/Details";
import { v4 as uuid } from "uuid";
import ErrorBoundary from "./Components/ErrorBoundary";

if (!localStorage.getItem("todoList")) {
	localStorage.setItem("todoList", JSON.stringify([]));
}

function LandingPage() {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem("todoList"))
	);

	const addTodo = (formData) => {
		const title = formData.get("title");
		const details = formData.get("details");
		const id = uuid();
		// let newTodoList = [];

		// if (title) {
		// 	if (todoList) {
		// 		newTodoList = [...todoList, { title, details, id }];
		// 	} else {
		// 		newTodoList = [{ title, details, id }];
		// 	}
		const newTodoList = [...todoList, { title, details, id }];
		setTodoList(newTodoList);
		// }
	};

	const deleteTodo = (id) => {
		const newTodoList = todoList.filter(function (obj) {
			return obj.id !== id;
		});
		setTodoList(newTodoList);
	};

	const updateTodos = () => {
		localStorage.setItem("todoList", JSON.stringify(todoList || []));
	};

	useEffect(() => {
		if (todoList) {
			localStorage.setItem("todoList", JSON.stringify(todoList));
		}
	}, [todoList]);

	return (
		<div>
			<h1>Todo List</h1>
			<ErrorBoundary>
				<Form addTodo={addTodo} />
				<Details todoList={todoList} deleteTodo={deleteTodo} />
			</ErrorBoundary>
		</div>
	);
}

export default LandingPage;
