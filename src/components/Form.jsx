import { useState } from "react";
import "../index.css";

import { TodoCard } from "./TodoCard";

const Form = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const handleChange = (event) => {
		setTodo(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (todo) {
			setTodos((prevTodos) => {
				return [...prevTodos, todo];
			});
		}
		setTodo("");
	};

	return (
		<div className="gradient-bg">
			<div className="flex flex-col gap-14 items-center justify-center">
				<div className="flex bg-white px-7 py-10 rounded-2xl w-full items-center space-x-2 md:w-1/3 mt-12">
					<input
						className="flex h-10 w-full rounded-lg border border-black/60 bg-transparent px-3 py-2 text-md placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/70 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						placeholder="Enter your TODO"
						value={todo}
						onChange={handleChange}
					></input>
					<button
						type="button"
						onClick={handleSubmit}
						className="rounded-lg bg-[#621878] px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-36 h-[40px]"
					>
						Add
					</button>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-20">
					{todos.map((todo, index) => (
						<TodoCard
							key={index}
							index={index}
							todo={todo}
							setTodos={setTodos}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Form;
