import { useEffect, useState } from "react";

interface IData {
	[url: string]: { content: any };
}

export const useFetch = (url: string) => {
	const [data, setData] = useState<IData>({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		// setLoading(true);
		// const data = new Promise((resolve) => resolve(url));
		// data
		// 	.then((res) => setData({ [url]: { content: res } }))
		// 	.finally(() => setLoading(false))
		// 	.catch((e) => setError(e));

		const getData = async () => {
			setLoading(true);
			await fetch(url)
				.then((res) => setData({ [url]: { content: res } }))
				.catch((e) => setError(e));
		};

		if (data[url] === undefined) {
			getData();
		}
	}, [url]);

	return { data, loading, error };
};
