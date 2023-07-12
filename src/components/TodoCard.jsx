/* eslint-disable react/prop-types */

export function TodoCard({ index, todo }) {
	return (
		<div className="w-[350px] rounded-2xl border-2 bg-[#24273D] text-white">
			<div className="p-6">
				<div className="flex flex-col gap-9 pt-3 pb-4  ">
					<h1 className="text-[22px] font-semibold capitalize">
						{`${index + 1}. `} {todo}
					</h1>
					<h1 className="  text-base font-normal">Status: Pending</h1>
				</div>

				<div className="flex flex-col gap-3 mt-5">
					<button
						type="button"
						className=" w-full rounded-lg bg-[#3425AC] px-2 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
					>
						Update Status
					</button>
					<button
						type="button"
						className=" w-full rounded-lg bg-[#3425AC] px-2 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
}
