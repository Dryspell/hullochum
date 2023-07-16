"use client";

import { Happy } from "./components";

export default function Home() {
	const hello = { message: "Hello pizza", name: "pizza", type: "food" };
	
	return (
		<main>
			<Happy hello={hello} />
		</main>
	);
}
