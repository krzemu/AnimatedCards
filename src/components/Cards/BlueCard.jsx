'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Card from '../UI/Card.jsx';
import LineArrow from '../SvgIcons/LineArrow.jsx';
import Mac from '../UI/Mac.jsx';

export default function BlueCard({}) {
	const cardRefs = {
		cardRef  : useRef(null),
		titleRef : useRef(null),
		arrowRef : useRef(null),
		macRef   : useRef(null)
	};
	const { cardRef, titleRef, arrowRef, macRef } = cardRefs;
	useEffect(
		() => {
			const hoverTl = gsap.timeline({ defaults: { duration: 0.7, ease: 'expo.out' } });
			console.log(cardRef);
			hoverTl.fromTo(cardRef.current, { opacity: 0, y: 0, height: 0 }, { opacity: 1, y: 0, height: '100%' });
			hoverTl.fromTo(titleRef.current, { opacity: 0 }, { opacity: 1 });
			hoverTl.fromTo(macRef.current, { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 }, '<');
			hoverTl.fromTo(
				arrowRef.current,
				{ opacity: 0, height: 0, width: 0 },
				{ opacity: 1, height: '100%', width: '100%' },
				'-=.35'
			);
		},
		[ cardRef ]
	);

	return (
		<Card className="bg-p_blue flex flex-col justify-between" ref={cardRef}>
			<h3 className="text-2xl sm:text-3xl px-4 py-4 font-bold" ref={titleRef}>
				Lorem ipsum is simply dummy text
			</h3>
			<div className="w-full grid grid-cols-3  place-items-stretch">
				<div className="ml-8 mb-8">
					<LineArrow ref={arrowRef} />
				</div>

				<div className="w-full h-32 flex justify-end col-span-2">
					<Mac className="w-36" ref={macRef} />
				</div>
			</div>
		</Card>
	);
}
