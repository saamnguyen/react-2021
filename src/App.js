import { useState } from "react";

//to do list

function App() {
	const [job, setJob] = useState("");
	const [jobs, setJobs] = useState(() => {
		const storageJobs = JSON.parse(localStorage.getItem("jobs"));

		console.log(storageJobs);
		return storageJobs;
	});

	//console.log(job);

	const handleSubmit = () => {
		setJobs((prev) => {
			const newJobs = [...prev, job];

			//Save LocalStorage
			const jsonJobs = JSON.stringify(newJobs);
			//console.log(jsonJobs);
			localStorage.setItem("jobs", jsonJobs);

			return [...prev, job];
		});
		setJob("");

		//console.log(jobs);
	};

	return (
		<div style={{ padding: 32 }}>
			<input value={job} onChange={(e) => setJob(e.target.value)} />
			<button onClick={handleSubmit}>ADD</button>

			<ul>
				{jobs.map((job, index) => (
					<li key={index}>{job}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
