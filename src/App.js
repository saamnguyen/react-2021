import { useState } from "react";

const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

function App() {
	const [gift, setGift] = useState(); //Hien thi chua co phan thuong nen mac dinh la khong co tham so

	//console.log(gift + setGift);
	const radomGift = () => {
		const index = Math.floor(Math.random() * gifts.length);

		setGift(gifts[index]); //Thay doi gia tri khi co
		//console.log(gifts[index]);
	};

	return (
		<div style={{ padding: 32 }}>
			<h1>{gift || "Chưa có phần thưởng"}</h1>
			<button onClick={radomGift}>Lay thuong</button>
		</div>
	);
}

export default App;
