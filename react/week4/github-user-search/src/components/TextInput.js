import React, { useContext } from "react";
import { TextInputContext } from "../ContextManager/Context";

const FormInput = () => {
	const { textInput, setTextInput } = useContext(TextInputContext);

	const handleChange = (event) => {
		setTextInput(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="enter text to search"
				value={textInput}
				onChange={handleChange}
			/>
		</div>
	);
};

export default FormInput;
