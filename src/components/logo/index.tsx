"use client";

import { m } from "framer-motion";
import { useState } from "react";

export function Logo({ size = 348 }: { size?: number }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<m.svg
			width={size}
			height={size}
			viewBox="0 0 348 348"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<m.rect
				width="348"
				height="348"
				rx="50"
				animate={{
					fill: isHovered
						? ["url(#paint0_linear_7_85)", "url(#paint1_linear_7_85)"]
						: ["url(#paint1_linear_7_85)", "url(#paint0_linear_7_85)"],
				}}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			/>
			<path
				d="M161.571 218.714H175.857V233H161.571V218.714ZM161.571 204.429H175.857V218.714H161.571V204.429ZM161.571 190.143H175.857V204.429H161.571V190.143ZM161.571 175.857H175.857V190.143H161.571V175.857ZM161.571 161.571H175.857V175.857H161.571V161.571ZM161.571 147.286H175.857V161.571H161.571V147.286ZM161.571 133H175.857V147.286H161.571V133ZM161.571 118.714H175.857V133H161.571V118.714ZM175.857 118.714H190.143V133H175.857V118.714ZM175.857 133H190.143V147.286H175.857V133ZM175.857 147.286H190.143V161.571H175.857V147.286ZM175.857 161.571H190.143V175.857H175.857V161.571ZM175.857 175.857H190.143V190.143H175.857V175.857ZM175.857 190.143H190.143V204.429H175.857V190.143ZM175.857 204.429H190.143V218.714H175.857V204.429ZM147.286 133H161.571V147.286H147.286V133Z"
				fill="white"
			/>
			<circle cx="174" cy="174" r="111.5" stroke="white" strokeWidth="11" />
			<circle cx="174" cy="174" r="111.5" stroke="white" strokeWidth="11" />
			<circle cx="174" cy="174" r="111.5" stroke="white" strokeWidth="11" />
			<circle cx="174" cy="174" r="111.5" stroke="white" strokeWidth="11" />
			<path
				d="M241.5 174C241.5 205.438 233.484 233.639 220.815 253.806C208.1 274.047 191.229 285.5 173.5 285.5C155.771 285.5 138.9 274.047 126.185 253.806C113.516 233.639 105.5 205.438 105.5 174C105.5 142.562 113.516 114.361 126.185 94.1942C138.9 73.9532 155.771 62.5 173.5 62.5C191.229 62.5 208.1 73.9532 220.815 94.1942C233.484 114.361 241.5 142.562 241.5 174Z"
				stroke="white"
				strokeWidth="11"
			/>
			<path
				d="M241.5 174C241.5 205.438 233.484 233.639 220.815 253.806C208.1 274.047 191.229 285.5 173.5 285.5C155.771 285.5 138.9 274.047 126.185 253.806C113.516 233.639 105.5 205.438 105.5 174C105.5 142.562 113.516 114.361 126.185 94.1942C138.9 73.9532 155.771 62.5 173.5 62.5C191.229 62.5 208.1 73.9532 220.815 94.1942C233.484 114.361 241.5 142.562 241.5 174Z"
				stroke="white"
				strokeWidth="11"
			/>
			<path
				d="M241.5 174C241.5 205.438 233.484 233.639 220.815 253.806C208.1 274.047 191.229 285.5 173.5 285.5C155.771 285.5 138.9 274.047 126.185 253.806C113.516 233.639 105.5 205.438 105.5 174C105.5 142.562 113.516 114.361 126.185 94.1942C138.9 73.9532 155.771 62.5 173.5 62.5C191.229 62.5 208.1 73.9532 220.815 94.1942C233.484 114.361 241.5 142.562 241.5 174Z"
				stroke="white"
				strokeWidth="11"
			/>
			<path
				d="M241.5 174C241.5 205.438 233.484 233.639 220.815 253.806C208.1 274.047 191.229 285.5 173.5 285.5C155.771 285.5 138.9 274.047 126.185 253.806C113.516 233.639 105.5 205.438 105.5 174C105.5 142.562 113.516 114.361 126.185 94.1942C138.9 73.9532 155.771 62.5 173.5 62.5C191.229 62.5 208.1 73.9532 220.815 94.1942C233.484 114.361 241.5 142.562 241.5 174Z"
				stroke="white"
				strokeWidth="11"
			/>
			<line
				x1="78"
				y1="118"
				x2="136"
				y2="118"
				stroke="white"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<line
				x1="212"
				y1="118"
				x2="270"
				y2="118"
				stroke="white"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<line
				x1="270"
				y1="230"
				x2="212"
				y2="230"
				stroke="white"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<line
				x1="136"
				y1="230"
				x2="78"
				y2="230"
				stroke="white"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<line
				x1="141"
				y1="175"
				x2="63"
				y2="175"
				stroke="white"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<line
				x1="285"
				y1="175"
				x2="207"
				y2="175"
				stroke="white"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<line
				x1="173"
				y1="91"
				x2="173"
				y2="66"
				stroke="white"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<line
				x1="173"
				y1="285"
				x2="173"
				y2="260"
				stroke="white"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_7_85"
					x1="19"
					y1="23.5"
					x2="323"
					y2="336.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#70A2ED" />
					<stop offset="1" stopColor="#D81489" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_7_85"
					x1="323"
					y1="336.5"
					x2="19"
					y2="23.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#70A2ED" />
					<stop offset="1" stopColor="#D81489" />
				</linearGradient>
			</defs>
		</m.svg>
	);
}
