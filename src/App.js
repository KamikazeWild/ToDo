import "./App.css";
import Todo from "./todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Todo />}></Route>
					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
