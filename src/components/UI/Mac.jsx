import { forwardRef } from 'react';
import MacIcons from './MacIcons';

export default forwardRef(function Mac({ className }, ref) {
	const wrapperClass = `${
		className ? className :
		''}
        h-32 mr-1 border-t-2 border-x-2 border-t-xl border-white/60 rounded-t-xl flex flex-col justify-between`;

	return (
		<div className={wrapperClass} ref={ref}>
			<div className="w-full h-full relative">
				<div className="w-11/12 mx-auto h-6 rounded-t-lg grid grid-cols-3 place-items-stretch">
					<MacIcons />
					<div className="w-full-aspect-square col-span-2 my-2 bg-white/20 rounded-xl" />
				</div>
				<div className="w-full h-4/5 bg-gradient-to-b from-transparent to-white/20 z-10" />
				<div id="qolo" className="bg-p_blue w-full h-full absolute inset-0 m-auto -z-10" />
			</div>
		</div>
	);
});
