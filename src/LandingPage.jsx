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
		const task = formData.get("task");
		const details = formData.get("details");
		const id = uuid();

		const newTodoList = [...todoList, { task, details, id }];
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

	return (
		<div id="landing-page">
			<div className="header">
				<h1>Todo List</h1>
				<text>Compartmentalise your work</text>
			</div>
			<ErrorBoundary>
				<Form addTodo={addTodo} />
				<Details todoList={todoList} deleteTodo={deleteTodo} />
			</ErrorBoundary>
		</div>
	);
}

export default LandingPage;
