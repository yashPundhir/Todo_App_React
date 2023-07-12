/* eslint-disable react/prop-types */
import { useState } from "react";
export function TodoCard({ index, todo, setTodos }) {
	const [status, setStatus] = useState("Pending");

	function updateStatus() {
		if (status === "Pending") {
			setStatus("Completed");
		}
		if (status === "Completed") {
			setStatus("Pending");
		}
	}

	function removeTodo() {
		// Update the todos state by filtering out the todo with the current index
		setTodos((prevTodos) => prevTodos.filter((prevTodo, i) => i !== index));
	}

	return (
		<div className="w-[350px] rounded-2xl border-2 bg-[#24273D] text-white">
			<div className="p-6">
				<div className="flex flex-col gap-9 pt-3 pb-4  ">
					<h1 className="text-[22px] font-semibold capitalize">
						{`${index + 1}. `} {todo}
					</h1>
					<h1 className="  text-base font-normal">Status: {status}</h1>
				</div>

				<div className="flex flex-col gap-3 mt-5">
					<button
						type="button"
						className=" w-full rounded-lg bg-[#3425AC] px-2 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
						onClick={updateStatus}
					>
						Update Status
					</button>
					<button
						type="button"
						className=" w-full rounded-lg bg-[#3425AC] px-2 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
						onClick={removeTodo}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
}
