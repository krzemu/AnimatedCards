export default function Container({ children }) {
	return (
		<main className="min-h-screen w-fit mx-auto flex flex-wrap justify-center items-center select-none">
			<div className="m-4 w-fit grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-5 4xl:grid-cols-6 5xl:grid-cols-7 gap-4">
				{children}
			</div>
		</main>
	);
}
