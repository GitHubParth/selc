import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

import GridCards from "../Components/GridCards";

const HomePage = () => {
	useEffect(() => {
		const href = window.location.href.substring(
			window.location.href.lastIndexOf("#") + 1
		);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const swiperRef = useRef();
	const heroSwiperRef = useRef();

	// const aboutUsData = [
	// 	{
	// 		image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
	// 		name: "Facilities",
	// 		desc: "Access 500+ cutting-edge instruments supported by more than 100 highly skilled technicians.",
	// 	},
	// 	// {
	// 	// 	image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/libraries/_dsc4668-2.jpg/jcr:content/renditions/cq5dam.web.800.1047.2x.jpeg",
	// 	// 	name: "Centres",
	// 	// 	desc: "150+ research centres and networks focusing on some of the world's greatest challenges.",
	// 	// },
	// 	{
	// 		image: "https://www.sydney.edu.au/content/dam/people/_33i7057-2.jpg/jcr:content/renditions/cq5dam.web.800.1105.2x.jpeg",
	// 		name: "Find a researcher",
	// 		desc: "Our academics are leaders in their fields, publishing thousands of papers each year.",
	// 	},
	// ];

	const ourImpactData = [
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/Hala-new-2.JPG/jcr:content/renditions/cq5dam.web.440.296.2x.jpeg",
			name: "Printing artificial bones",
			desc: "We're developing personalised 3D-printed ceramic bone implants that could revolutionise surgery for millions of people.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
			name: "Rethinking agriculture",
			desc: "We're leveraging robotics to make agricultural more productive and sustainable, helping farmers thrive into the future.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
			name: "Trialling psychiatric drugs",
			desc: "We're developing a new oxytocin-based drug for schizophrenia, depression and other psychiatric disorders.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
			name: "Rethinking agriculture",
			desc: "We're leveraging robotics to make agricultural more productive and sustainable, helping farmers thrive into the future.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
			name: "Trialling psychiatric drugs",
			desc: "We're developing a new oxytocin-based drug for schizophrenia, depression and other psychiatric disorders.",
		},
	];

	// const newsData = [
	// 	{
	// 		image: "https://www.sydney.edu.au/content/dam/people/sam-banister-(right)-josh-ismin-(left)-psylo-high-res.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
	// 		name: "New psychedelic treatments for mental health",
	// 		desc: "University of Sydney researchers have partnered with Psylo, a global biotechnology startup, to develop innovative treatments for psychiatric and neurological disorders.",
	// 	},
	// 	{
	// 		image: "https://www.sydney.edu.au/content/dam/corporate/images/faculty-of-arts-and-social-sciences/research/research-centres/sssharc/new-law-school-building.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
	// 		name: "ARC invests in research partnerships with industry",
	// 		desc: "The Australian Research Council has awarded $5.15m to industry projects at the University, along with funding for an Industrial Transformation Training Centre to prepare leaders of Australia's future quantum computing industry.",
	// 	},
	// ];

	const themesData = [
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "IoT Solutions for Energy Monitoring",
			desc: "IoT solutions for energy monitoring are revolutionizing the way we manage and optimize energy consumption. By leveraging sensors, data analytics, and machine learning, these solutions provide real-time insights into energy usage patterns, identify inefficiencies, and enable proactive measures to reduce energy waste and costs.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Recycle and Reuse",
			desc: "It uses technology to streamline compliance and oversight, enhancing efficiency, transparency, and real-time management of regulations.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Intelligent Energy Systems and Data Analytics",
			desc: "The Algorithmic Ethics theme ensures fairness, transparency, and accountability in algorithms, addressing biases and ethical concerns in AI-driven decisions.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Utility-Driven Smart Energy Services",
			desc: "The Human-AI Interaction theme explores seamless, intuitive collaboration between humans and AI, emphasizing trust, user control, and design.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Automating Governance",
			desc: "It uses technology to streamline compliance and oversight, enhancing efficiency, transparency, and real-time management of regulations.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Algorithmic Ethics",
			desc: "The Algorithmic Ethics theme ensures fairness, transparency, and accountability in algorithms, addressing biases and ethical concerns in AI-driven decisions.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Human-AI Interaction",
			desc: "The Human-AI Interaction theme explores seamless, intuitive collaboration between humans and AI, emphasizing trust, user control, and design.",
		},
	];

	const heroSwiperData = [
		{
			image: "/images/IOT.jpg",
			title: "IoT Solutions for Energy Monitoring",
			desc: "IoT solutions for energy monitoring are revolutionizing the way we manage and optimize energy consumption. By leveraging sensors, data analytics, and machine learning, these solutions provide real-time insights into energy usage patterns, identify inefficiencies, and enable proactive measures to reduce energy waste and costs.",
		},
		{
			image: "/images/R&R.jpg",
			title: "Recycle and Reuse",
			desc: "Recycle and reuse are essential practices for promoting sustainability and reducing our environmental impact. By recycling materials such as paper, plastic, and metal, we can conserve natural resources and reduce the need for new raw materials. Additionally, reusing items like clothing, furniture, and electronics extends their lifespan and prevents them from ending up in landfills"
		},
		{
			image: "/images/IESDA.jpg",
			title: "Intelligent Energy Systems and Data Analytics",
			desc: "Intelligent energy systems and data analytics are transforming the energy sector by enabling grid operators to better manage the flow of electricity, improve grid reliability, and integrate renewable energy sources more effectively. By analyzing data from various sources, such as smart meters, sensors, and weather forecasts, these systems can optimize energy production, distribution, and consumption, leading to a more efficient and sustainable energy grid."
		},
		{
			image: "/images/UDSES.jpg",
			title: "Utility-Driven Smart Energy Services",
			desc: "Utility-driven smart energy services are empowering consumers to take control of their energy usage and reduce their energy bills. These services, such as smart thermostats, home energy management systems, and demand response programs, provide valuable insights into energy consumption patterns and offer tools to optimize energy use. By working with utilities, consumers can actively participate in shaping a more sustainable and efficient energy future."
		},
		// {
		// 	image: "https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1080",
		// 	title: "Research Theme 5",
		// 	desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
		// },
	]

	const swiperRef3 = useRef();
	const swiperRef2 = useRef();

	const mediaImages = [
		"https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/bms/_33i6564.jpg",
		"https://www.sydney.edu.au/content/dam/people/_33i7057-2.jpg/jcr:content/renditions/cq5dam.web.800.1105.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/libraries/_dsc4668-2.jpg/jcr:content/renditions/cq5dam.web.800.1047.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/Hala-new-2.JPG/jcr:content/renditions/cq5dam.web.440.296.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/people/sam-banister-(right)-josh-ismin-(left)-psylo-high-res.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/corporate/images/faculty-of-arts-and-social-sciences/research/research-centres/sssharc/new-law-school-building.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
	];

	const newsData = [
		{
			image: "https://www.sydney.edu.au/content/dam/corporate/images/faculty-of-arts-and-social-sciences/research/research-centres/sssharc/new-law-school-building.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
			name: "ARC invests in research partnerships with industry",
			desc: "The Australian Research Council has awarded $5.15m to industry projects at the University, along with funding for an Industrial Transformation Training Centre to prepare leaders of Australia's future quantum computing industry.",
		},{
			image: "https://images.pexels.com/photos/22741670/pexels-photo-22741670/free-photo-of-clock-with-digits-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1080&lazy=load",
			name: "ARC invests in research partnerships with industry",
			desc: "The Australian Research Council has awarded $5.15m to industry projects at the University, along with funding for an Industrial Transformation Training Centre to prepare leaders of Australia's future quantum computing industry.",
		},
		{
			image: "https://images.pexels.com/photos/22741670/pexels-photo-22741670/free-photo-of-clock-with-digits-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1080&lazy=load",
			name: "ARC invests in research partnerships with industry",
			desc: "The Australian Research Council has awarded $5.15m to industry projects at the University, along with funding for an Industrial Transformation Training Centre to prepare leaders of Australia's future quantum computing industry.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/people/sam-banister-(right)-josh-ismin-(left)-psylo-high-res.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
			name: "New psychedelic treatments for mental health",
			desc: "University of Sydney researchers have partnered with Psylo, a global biotechnology startup, to develop innovative treatments for psychiatric and neurological disorders.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/corporate/images/faculty-of-arts-and-social-sciences/research/research-centres/sssharc/new-law-school-building.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
			name: "ARC invests in research partnerships with industry",
			desc: "The Australian Research Council has awarded $5.15m to industry projects at the University, along with funding for an Industrial Transformation Training Centre to prepare leaders of Australia's future quantum computing industry.",
		},
		{
			image: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=1080&lazy=load",
			name: "New psychedelic treatments for mental health",
			desc: "University of Sydney researchers have partnered with Psylo, a global biotechnology startup, to develop innovative treatments for psychiatric and neurological disorders.",
		},
		{
			image: "https://images.pexels.com/photos/22741670/pexels-photo-22741670/free-photo-of-clock-with-digits-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1080&lazy=load",
			name: "ARC invests in research partnerships with industry",
			desc: "The Australian Research Council has awarded $5.15m to industry projects at the University, along with funding for an Industrial Transformation Training Centre to prepare leaders of Australia's future quantum computing industry.",
		},
	];

	const [currHeroIdx, setCurrHeroIdx] = useState(0)

	return (
		<div className="w-full font-Open-sans">
			<div className="w-full mt-20 h-[75vh] flex items-center justify-center border-b-4 border-primary-500">
				<div 
					style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1080)" }} 
					className={"w-full h-full relative !flex bg-cover bg-no-repeat bg-center"}
				>
					<div className="py-20 lg:max-w-6xl mx-auto px-4 lg:px-0 flex flex-col justify-end lg:gap-8 gap-4 text-white">
							<p className="lg:text-6xl text-2xl font-Nunito">Our Mission</p>
							<div className="h-[5px] w-[14%] bg-primary-500"></div>
							<p className="lg:text-2xl font-normal lg:leading-10 lg:w-[90%] w-full">
								To drive transformative solutions in sustainable energy by fostering interdisciplinary collaboration, advancing cutting-edge research, and building strong partnerships that empower stakeholders toward a smarter, energy-efficient, and carbon-neutral world.
							</p>
						<div>
							<button 
								className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-600 transition-all duration-300"
								onClick={() => {window.location.href = "/about#vision-mission"}}
							>
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="w-full mt-20 h-[75vh] flex items-center justify-center border-b-4 border-primary-500">
				<Swiper
					onBeforeInit={(swiper) => {
						heroSwiperRef.current = swiper;
					}}
					onSlideChange={(swiper) => {
						setCurrHeroIdx(swiper.realIndex)
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					effect={'fade'}
					modules={[Autoplay, EffectFade]}
					loop={true}
					className="mySwiper w-full h-full px-8 relative">
					<div className="absolute bottom-5 left-1/2 translate-x-[-50%] flex gap-2 z-20">
						{heroSwiperData.map((num, idx) => (
							<button key={idx} onClick={() => {heroSwiperRef.current.slideTo(idx); setCurrHeroIdx(idx) }} className={currHeroIdx === idx ? "bg-primary-500 h-1.5 !outline-none lg:w-14 w-5 hover:bg-primary-500 rounded-full" : "bg-gray-500 h-1.5 !outline-none lg:w-14 w-5 hover:bg-primary-500 rounded-full"}></button>
						))}
					</div>
					{heroSwiperData.map((item, index) => (
						<SwiperSlide 
							key={index} 
							style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url(" + item.image + ")" }} 
							className={"w-full h-full relative !flex bg-cover bg-no-repeat bg-center"}
						>
							<div className="py-20 lg:max-w-6xl mx-auto px-4 lg:px-0 flex flex-col justify-end lg:gap-8 gap-4 text-white">
								<p className="lg:text-6xl text-2xl font-Nunito">{item.title}</p>
								<div className="h-[5px] w-[14%] bg-primary-500"></div>
								<p className="lg:text-2xl font-normal lg:leading-10 lg:w-[50%] w-full">
									Our researchers are tackling the world’s greatest
									problems, from creating a more sustainable world to
									developing new treatments for chronic diseases.
								</p>
								<div>
									<button 
										className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-600 transition-all duration-300"
										onClick={() => {window.location.href = "/research/" + item.title.toLowerCase().split(" ").join("-")}}
									>
										Learn More
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div> */}
			{/* <GridCards
				cols="3"
				title="About Us"
				data={aboutUsData}
				bgColor="#F1F1F1"
			/> */}
			<div className="w-full flex items-center justify-center md:py-32 py-28 bg-[#F1F1F1]">
				<div className="w-full max-w-6xl px-4 lg:px-0 flex flex-col gap-8">
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-4">
							<p className="lg:text-5xl text-3xl font-semibold font-Open-sans">News</p>
							<div className="w-[50%] h-[4px] bg-primary-500" />
						</div>
					</div>
					<div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-4">
						{newsData.map((item, index) => {
							if (index === 0) {
								return(
									<div key={index} className="col-span-2">
										<div className="w-full h-full max-h-[500px] overflow-hidden group">
											<div className="w-full h-[80%] rounded-xl overflow-hidden">
												<img
													src={item.image}
													alt=""
													className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-105"
												/>
											</div>
											<div className="p-4 px-2">
												<p className="text-2xl font-semibold group-hover:text-primary-500 transition-all duartion-300">{item.name}</p>
												<p className="text-sm mt-2 line-clamp-2">
													{item.desc}
												</p>
											</div>
										</div>
									</div>
								)
							}
						})}
						<div className="col-span-1 max-h-[500px] overflow-y-scroll no-scrollbar">
							<div className="w-full h-full flex flex-col gap-4">
								{newsData.map((item, index) => {
									if (index > 0) {
										return(
											<div key={index} className="w-full border-b border-primary-500 pb-4 px-2 group">
												<p className="text-xl font-semibold group-hover:text-primary-500 transition-all duartion-300">{item.name}</p>
												<p className="text-sm mt-2 line-clamp-2">
													{item.desc}
												</p>
											</div>
										)
									}
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="research" className="w-full flex items-center justify-center md:py-32 py-28 bg-white">
				<div className="w-full max-w-6xl px-4 lg:px-0 flex flex-col gap-8">
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-4">
							<p className="lg:text-5xl text-3xl font-semibold font-Open-sans">Research Themes</p>
							<div className="w-[50%] h-[4px] bg-primary-500" />
						</div>
						<div className="flex items-center gap-5 lg:hidden">
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								className="swiper-button-prev w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50 shadow"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									fill="currentColor"
									className="bi bi-chevron-left"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
									/>
								</svg>
							</button>
							<button
								onClick={() => swiperRef.current?.slideNext()}
								className="swiper-button-next w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50 shadow"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									fill="currentColor"
									className="bi bi-chevron-right"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="relative">
						<Swiper
							spaceBetween={30}
							breakpoints={{
								576: {
									slidesPerView: 1,
								},
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 3,
								},
							}}
							onBeforeInit={(swiper) => {
								swiperRef.current = swiper;
							}}
							loop={true}
							className="mySwiper w-full px-8"
						>
							{heroSwiperData.map((item, index) => (
								<SwiperSlide 
									className="w-full flex flex-col gap-3 group" 
									key={index}
									onClick={() => {window.location.href = "/research/" + item.title.toLowerCase().split(" ").join("-")}}
								>
									<img
										src={item.image}
										alt=""
										className="w-full lg:h-80 h-64 object-cover rounded-xl"
									/>
									<div className="flex flex-col gap-1 lg:mt-5 mt-3">
										<p className="lg:text-2xl text-xl font-semibold group-hover:text-primary-500 truncate transition-all duration-300">{item.title}</p>
										<div className="w-0 group-hover:w-[15%] h-[2px] bg-primary-500 transition-all duration-300"></div>
									</div>
									<p className="line-clamp-2 lg:mt-4 mt-3 text-xs lg:text-base">{item.desc}</p>
								</SwiperSlide>
							))}
						</Swiper>
						<button
							onClick={() => swiperRef.current?.slidePrev()}
							className="swiper-button-prev hidden absolute top-1/2 -translate-y-1/2 -left-20 w-8 h-8 lg:w-12 lg:h-12 rounded-full lg:flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50 shadow"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								fill="currentColor"
								className="bi bi-chevron-left"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
								/>
							</svg>
						</button>
						<button
							onClick={() => swiperRef.current?.slideNext()}
							className="swiper-button-next hidden absolute top-1/2 -translate-y-1/2 -right-20 w-8 h-8 lg:w-12 lg:h-12 rounded-full lg:flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50 shadow"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								fill="currentColor"
								className="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-center gap-10 md:py-32 py-28 bg-[#F1F1F1]">
				<div className="w-full max-w-6xl flex flex-col gap-8 px-4 lg:px-0">
					<div className="flex flex-col gap-4">
						<p className="text-5xl font-semibold font-Open-sans capitalize">Resources</p>
						<div className="w-[9%] h-[4px] bg-primary-500" />
					</div>
					<div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-4">
						<div className="w-full h-full bg-white aspect-square rounded-xl md:px-7 px-3 border border-primary-500 flex flex-col md:gap-5 gap-2 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="md:text-4xl text-2xl font-bold group-hover:text-primary-500 transition-all duration-300">1492</p>
							<p className="md:text-base text-sm">Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full bg-white aspect-square rounded-xl md:px-7 px-3 border border-primary-500 flex flex-col md:gap-5 gap-2 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="md:text-4xl text-2xl font-bold group-hover:text-primary-500 transition-all duration-300">52</p>
							<p className="md:text-base text-sm">Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full bg-white aspect-square rounded-xl md:px-7 px-3 border border-primary-500 flex flex-col md:gap-5 gap-2 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="md:text-4xl text-2xl font-bold group-hover:text-primary-500 transition-all duration-300">1256</p>
							<p className="md:text-base text-sm">Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full bg-white aspect-square rounded-xl md:px-7 px-3 border border-primary-500 flex flex-col md:gap-5 gap-2 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="md:text-4xl text-2xl font-bold group-hover:text-primary-500 transition-all duration-300">560</p>
							<p className="md:text-base text-sm">Laboratories in 100+ states</p>
						</div>
					</div>
				</div>
			</div>
			{/* <GridCards
				id="research-project"
				cols="3"
				title="Publications"
				data={ourImpactData}
				bgColor="#F1F1F1"
			/> */}
			<div className="w-full bg-white">
				<div className="max-w-6xl h-full mx-auto py-10">
					<div id="events" className="flex flex-col gap-10 py-24 px-4 lg:px-0">
						<div className="flex items-center justify-between">
							<div className="flex flex-col lg:gap-4 gap-2">
								<p className="lg:text-5xl text-3xl font-semibold font-Open-sans">Events</p>
								<div className="w-[60%] h-[4px] bg-primary-500" />
							</div>
							<div className="flex items-center gap-5 lg:hidden">
								<button
									onClick={() => swiperRef2.current?.slidePrev()}
									className="swiper-button-prev w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										fill="currentColor"
										className="bi bi-chevron-left"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
										/>
									</svg>
								</button>
								<button
									onClick={() => swiperRef2.current?.slideNext()}
									className="swiper-button-next w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										fill="currentColor"
										className="bi bi-chevron-right"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="relative">
							<Swiper
								spaceBetween={30}
								breakpoints={{
									576: {
										slidesPerView: 1,
									},
									768: {
										slidesPerView: 2,
									},
									1024: {
										slidesPerView: 3,
									},
								}}
								// autoplay={{
								// 	delay: 2100,
								// 	disableOnInteraction: false,
								// 	pauseOnMouseEnter: true,
								// }}
								onBeforeInit={(swiper) => {
									swiperRef2.current = swiper;
								}}
								loop={true}
								modules={[Autoplay]}
								className="mySwiper w-full px-8"
							>
								{newsData.map((item, index) => (
									<SwiperSlide className="w-full flex flex-col gap-3 group" key={index}>
										<div key={index} className="w-full group">
											<div className="w-full h-[70%] overflow-hidden rounded-xl">
												<img
													src={item.image}
													alt=""
													className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
												/>
											</div>
											<div className="h-[30%] flex flex-col justify-evenly">
												<div className="flex flex-col gap-0.5 lg:mt-4 mt-2">
													<p className="lg:text-2xl text-xl font-semibold group-hover:text-primary-500 truncate transition-all duration-300">{item.name}</p>
													<div className="w-0 group-hover:w-[15%] h-[2px] bg-primary-500 transition-all duration-300"></div>
												</div>
												<p className="line-clamp-2 lg:mt-3 mt-2">{item.desc}</p>
												<div className="mt-5 font-semibold flex items-center gap-2 justify-end">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={16}
														height={16}
														fill="currentColor"
														className="bi bi-calendar2-event group-hover:underline group-hover:text-primary-500 transition-all duration-300"
														viewBox="0 0 16 16"
													>
														<path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
														<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
														<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
													</svg>
													<p className="group-hover:underline group-hover:text-primary-500 transition-all duration-300 text-sm md:text-base">01/01/2000</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<button
								onClick={() => swiperRef2.current?.slidePrev()}
								className="swiper-button-prev hidden absolute top-1/2 -translate-y-1/2 -left-20 w-8 h-8 lg:w-12 lg:h-12 rounded-full lg:flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									fill="currentColor"
									className="bi bi-chevron-left"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
									/>
								</svg>
							</button>
							<button
								onClick={() => swiperRef2.current?.slideNext()}
								className="swiper-button-next hidden absolute top-1/2 -translate-y-1/2 -right-20 w-8 h-8 lg:w-12 lg:h-12 rounded-full lg:flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									fill="currentColor"
									className="bi bi-chevron-right"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
