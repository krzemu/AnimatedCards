import Card from '../UI/Card';

export default function PinkCard({}) {
	return (
		<Card className="bg-p_pink flex flex-col justify-center items-center">
			<div className="w-full h-full absolute inset-0 m-auto flex items-center justify-center">
				<h3 className="text-7-5xl mb-4 font-black font-display text-stroke text-stroke-white text-mask text-transparent leading-normal text-center">
					Night<br />Vision
				</h3>
				<div className="absolute inset-0 m-auto w-full h-full " />
			</div>
			<div className="h-full w-full rounded-full absolute inset-0 m-auto bg-gradient-radial from-white/20 to-transparet flex justify-center items-center z-10">
				<div className="w-28 h-28 bg-white/60 rounded-full absolute inset-0 m-auto z-20 blur-sm backgrop-blur-sm flex justify-center items-center">
					<div className="w-10 h-10 bg-white rounded-full" />
				</div>
			</div>
		</Card>
	);
}
