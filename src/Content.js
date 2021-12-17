import { useEffect, useState } from "react";

const lessions = [
	{
		id: 1,
		name: "React la gi? Tai sao nen hoc React",
	},
	{
		id: 2,
		name: "SPA/MPA la gi?",
	},
	{
		id: 3,
		name: "Arrow Funtion",
	},
];

function Content() {
	const [lessionId, setLessionId] = useState(1);

	useEffect(() => {
		const handleComment = (e) => {
			console.log(e);
		};

		window.addEventListener(`lesson-${lessionId}`, handleComment);

		return () =>
			window.removeEventListener(`lesson-${lessionId}`, handleComment);
	}, [lessionId]);

	return (
		<div>
			<ul>
				{lessions.map((lession) => (
					<li
						key={lession.id}
						style={{ color: lessionId === lession.id ? "red" : "#333" }}
						onClick={() => setLessionId(lession.id)}
					>
						{lession.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Content;
