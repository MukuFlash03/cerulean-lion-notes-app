import { useEffect, useState } from "react";

export default function getNotes() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/notes", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => setNotes(data));
	}, []);

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl font-bold mb-4 mt-5 text-black text-center">
				Get Notes
			</h1>

			<div className="flex flex-col items-center">
				{notes.map((note) => (
					<div
						key={note._id}
						className="flex flex-col items-center"
					>
						<h1 className="text-2xl font-bold mb-4 mt-5 text-white text-center">
							{note.title}
						</h1>
						<p className="text-lg font-poppins text-left">
							{note.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
