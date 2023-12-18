import Card from '../UI/Card';
import LineParalax from '../SvgIcons/LineParalax';

export default function CyanCard({}) {
	return (
		<Card className="bg-p_cyan flex flex-col justify-between py-8 items-center">
			<h3 className="text-2xl lg:text 3xl font-sans font-bold">Sounds right.</h3>
			<LineParalax />
		</Card>
	);
}
