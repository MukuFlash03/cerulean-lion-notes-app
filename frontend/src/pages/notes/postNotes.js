import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PROXY_BE_URL = "http://localhost:8000";

export default function PostNote() {
	const [title, setTitle] = useState(" ");
	const [content, setContent] = useState(" ");
	const [submitted, setSubmitted] = useState(false);
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Title: ", title);
		console.log("Content: ", content);

		fetch(`${PROXY_BE_URL}/api/notes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title, content }),
		})
			.then((res) => {
				setSubmitted(true);
				console.log(res);
				return res.json();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		if (submitted) {
			router.push("/notes/getNotes");
		}
	}, [submitted]);

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl font-bold mb-4 mt-5 text-black text-center">
				Post Note
			</h1>
			<div className="flex flex-col items-center">
				<form
					className="flex flex-col items-center"
					onSubmit={handleSubmit}
				>
					<input
						className="border-2 border-gray-500 text-black rounded-md mb-4 w-112 h-47"
						type="text"
						placeholder="Title"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						className="border-2 border-gray-500 text-black rounded-md mb-4 w-112 h-47"
						type="text"
						placeholder="Content"
						onChange={(e) => setContent(e.target.value)}
					/>
					<button
						type="submit"
						className="text-white px-4 mt-4 mb-4 py-2 border border-blue w-112 h-47 shadow-md"
					>
						Post Note
					</button>
				</form>
			</div>
		</div>
	);
}
