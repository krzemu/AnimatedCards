import Card from '../UI/Card';
import Mac from '../UI/Mac';

export default function BlueLondCard({}) {
	return (
		<Card className="bg-p_blue flex flex-col justify-between pt-8 items-start col-span-2" isLong="true">
			<h3 className="px-8 text-4xl font-display font-medium">Lorem ipsum is simply dummy text</h3>
			<div className="px-4 w-full grid grid-cols-3 place-items-stretch items-stretch h-full mt-4">
				<div className="col-span-2 relative">
					<div className="w-full ml-12">
						<Mac className="w-48 absolute top-0 z-30" />
						<Mac className="w-36 absolute top-0 -translate-x-12 translate-y-5 -rotate-12" />
						<Mac className="w-36 absolute top-0 translate-x-28 translate-y-5 rotate-12" />
					</div>
				</div>
				<div className="flex w-full h-full items-end justify-end">
					<button className="mb-4 mr-4 flex flex-col items-start h-max relative gap-3 text-left">
						<div className="mr-4 mb-2">Read more </div>
						<div className="absolute h-max top-0 bottom-0  my-auto">
							<svg
								className="w-full"
								width="273"
								height="30"
								viewBox="0 0 273 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M3 12.5C1.61929 12.5 0.5 13.6193 0.5 15C0.5 16.3807 1.61929 17.5 3 17.5L3 12.5ZM273 15L248 0.566265L248 29.4338L273 15ZM3 17.5L250.5 17.5L250.5 12.5L3 12.5L3 17.5Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="mr-4 text-xs mb-2" />
					</button>
				</div>
			</div>
		</Card>
	);
}
