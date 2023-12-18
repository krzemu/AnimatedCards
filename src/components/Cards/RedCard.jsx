import Card from '../UI/Card';
import StarIcon from '../SvgIcons/StarIcon';
import CircleIcon from '../SvgIcons/CircleIcon';
import TriangleIcon from '../SvgIcons/TriangleIcon';

export default function RedCard({}) {
	return (
		<Card className="bg-p_red flex justify-center items-center">
			<div className="w-4/6 h-4/6 grid grid-cols-2 grid-rows-2">
				<div className="w-full h-full bg-white" />
				<div className="w-full h-full">
					<StarIcon />
				</div>
				<div className="w-full h-full">
					<CircleIcon />
				</div>
				<div className="w-full h-full">
					<TriangleIcon />
				</div>
			</div>
		</Card>
	);
}
