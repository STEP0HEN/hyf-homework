import React, { useState } from "react";

export const TextInputContext = React.createContext();
export const UserContext = React.createContext();

const StateManager = ({ children }) => {
	const [username, setusername] = useState([]);
	const [textInput, setTextInput] = useState(null || "");

	return (
		<TextInputContext.Provider
			value={{ textInput: textInput, setTextInput: setTextInput }}
		>
			<UserContext.Provider
				value={{ username: username, setusername: setusername }}
			>
				{children}
			</UserContext.Provider>
		</TextInputContext.Provider>
	);
};

export default StateManager;
