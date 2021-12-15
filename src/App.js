import { useState } from "react";

//const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

//two way bindling
//Respone from API
const courses = [
	{
		id: 1,
		name: "HTML, CSS",
	},
	{
		id: 2,
		name: "Java",
	},
	{
		id: 3,
		name: "Python",
	},
];

function App() {
	//gitf
	//const [gift, setGift] = useState(); //Hien thi chua co phan thuong nen mac dinh la khong co tham so

	//console.log(gift + setGift);
	// const radomGift = () => {
	// 	const index = Math.floor(Math.random() * gifts.length);

	// 	setGift(gifts[index]); //Thay doi gia tri khi co
	// 	//console.log(gifts[index]);
	// };

	//form email, name
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");

	//courses
	const [checked, setChecked] = useState([]);
	console.log(checked);

	const handleCheck = (id) => {
		setChecked((prev) => {
			const isChecked = checked.includes(id);
			if (isChecked) {
				//uncheck
				return checked.filter((item) => item !== id); //bo check2 lan
			} else {
				return [...prev, id];
			}
		});
	};

	const handleSubmit = () => {
		//Call API
		//form email, name
		// console.log({
		// 	name,
		// 	email,
		// });
		//courses
		console.log({ ids: checked });
	};

	//console.log(name);

	return (
		<div style={{ padding: 32 }}>
			{/* <input value={name} onChange={(e) => setName(e.target.value)} />
			<input value={email} onChange={(e) => setEmail(e.target.value)} />
			<button onClick={handleSubmit}>Submit</button> */}
			{courses.map((course) => (
				<div key={course.id}>
					<input
						type="checkbox"
						checked={checked.includes(course.id)}
						onChange={() => handleCheck(course.id)} // courses
					/>
					{course.name}
				</div>
			))}

			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default App;
