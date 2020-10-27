import React, { useContext, useEffect } from "react";
import { UserContext, TextInputContext } from "../ContextManager/Context";

const FetchUser = () => {
	const { username, setusername } = useContext(UserContext);
	const { textInput } = useContext(TextInputContext);

	if (!textInput) {
		return "no results";
	}

	const fetchApi = () => {
		const baseUrl = `https://api.github.com/search/users?q=${textInput}`;
		fetch(baseUrl)
			.then((res) => res.json())
			.then((result) => {
				const userList = result.items;
				setusername(userList);
				console.log(userList);
			})
			.catch((error) => {
				return <p>{`something went wrong ${error}`}</p>;
			});
	};

	useEffect(() => {
		fetchApi();
	}, [textInput]);

	if (username.length === 0) {
		return <p>"loading..."</p>;
	}

	return username.map((user) => <p key={user.id}>{user.login}</p>);
};

export default FetchUser;
