import {
	backend,
	carrent,
	creator,
	css,
	datahouse,
	figma,
	freelancer,
	git,
	html,
	javascript,
	jobit,
	mobile,
	mui,
	nodejs,
	reactjs,
	redux,
	tailwind,
	threejs,
	tripguide,
	typescript,
	web,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "React Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "UIX Designer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Material UI",
		icon: mui,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Freelancer Web Developer",
		company_name: "",
		icon: freelancer,
		iconBg: "#383E56",
		date: "Aug 2020 - Present",
		points: [
			"INUT Design (www.inutdesign.com) - An E-commerce website for customizing laptops, mobile, camera skin.",
			"TapTapOn.me - My small start-up project, which provides the Smart Business Card by NFC technology",
			"KingstoneDanang.com - A website for displaying Granite & Marble stone, Furniture - Exterior products.",
			"NOOR Coffee Website - NOOR Kombucha Website - A website for the coffee shop includes: Blog, View Products, View Review",
		],
	},
	{
		title: "Software Engineering",
		company_name: "Datahouse Asia",
		icon: datahouse,
		iconBg: "#E6DEDD",
		date: "Jul 2021 - Mar 2023",
		points: [
			"I participated as a Software Engineer Intern. After 1 year, I was promoted to Middle Software Engineer at DHA",
			"Consult & design Front-end architecture and solutions.",
			"Working on multiple projects simultaneously in both Web and Mobile apps.",
			"Research and apply new technologies to the Front-end repository.",
			"Manage tasks & efforts for the Front-end team.",
			"Review code & support team members.",
			"Interview, Technical training for interns & new junior F.E (React) developers.",
			"Technologies: React, React Native, Redux, Restful API, AWS services, Firebase, SEO,...",
			"Domain: US public sectors",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
