import { useState } from "react";

//const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

function App() {
	//const [gift, setGift] = useState(); //Hien thi chua co phan thuong nen mac dinh la khong co tham so

	//console.log(gift + setGift);
	// const radomGift = () => {
	// 	const index = Math.floor(Math.random() * gifts.length);

	// 	setGift(gifts[index]); //Thay doi gia tri khi co
	// 	//console.log(gifts[index]);
	// };

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = () => {
		//Call API
		console.log({
			name,
			email,
		});
	};

	//console.log(name);

	return (
		<div style={{ padding: 32 }}>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<input value={email} onChange={(e) => setEmail(e.target.value)} />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default App;
