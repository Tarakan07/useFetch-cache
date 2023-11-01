import React, { FC } from "react";
import { useFetch } from "./useFetch";

const App: FC = () => {
	const { data: yourData, loading, error } = useFetch("api");
	return <div>App</div>;
};

export default App;
