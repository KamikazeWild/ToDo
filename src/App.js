import "./App.css";
import LandingPage from "./LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LandingPage />}></Route>
					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
