import { forwardRef } from 'react';

export default forwardRef(function Card(
	{ children, className, onClickHandler, onMouseEnterHandler, onMouseLeaveHandler, isLong = false },
	ref
) {
	const renderedClassName = `${
		className ? className :
		''} relative ${
		isLong ? 'w-130' :
		'w-64'} h-64 rounded-3xl lg:rounded-4xl overflow-hidden`;

	const wrapperClassName = `${
		isLong ? 'w-130 col-span-2' :
		'w-64'} h-64 rounded-3xl lg:rounded-4xl overflow-hidden`;

	return (
		<article className={wrapperClassName}>
			<div
				className={renderedClassName}
				onClick={onClickHandler}
				onMouseEnter={onMouseEnterHandler}
				onMouseLeave={onMouseLeaveHandler}
				ref={ref}>
				{children}
			</div>
		</article>
	);
});
