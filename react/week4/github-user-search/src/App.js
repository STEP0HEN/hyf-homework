import React from "react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import FetchUser from "./components/FetchUser";
import StateManager from "./ContextManager/Context";

const App = () => {
	return (
		<div className="App">
			<Header />
			<StateManager>
				<TextInput />
				<FetchUser />
			</StateManager>
		</div>
	);
};

export default App;
