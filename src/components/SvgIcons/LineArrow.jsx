import { forwardRef } from 'react';

export default forwardRef(function LineArrow({}, ref) {
	return (
		<svg
			className="w-full h-full"
			ref={ref}
			width="231"
			height="315"
			viewBox="0 0 231 315"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M20.4999 0.5C3.66656 61.3333 -17.3001 189.3 33.4999 214.5C84.2999 239.7 146.5 183.5 120.5 169.5C76.5 145.808 -9.1 186.6 48.5 271C106.1 355.4 192.833 294.167 229 253M229 253L212.5 300.5M229 253L176.5 264.5"
				stroke="white"
				strokeWidth="1.5"
			/>
		</svg>
	);
});
