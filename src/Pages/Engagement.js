import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/scrollbar";

const Engagement = () => {
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

	return (
		<div className="w-full">
			{/* <div className="w-full h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('https://www.sydney.edu.au/content/dam/bms/_33i6564.jpg')] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-end border-b-4 border-primary-500">
				<div className="py-20 max-w-6xl mx-auto flex flex-col gap-8">
					<p className="text-6xl italic font-Nunito">Engagement</p>
					<div className="h-[5px] w-[12%] bg-primary-500"></div>
					<p className="text-2xl font-normal leading-10 w-[50%]">
						Our researchers are tackling the world’s greatest
						problems, from creating a more sustainable world to
						developing new treatments for chronic diseases.
					</p>
				</div>
			</div> */}
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
							autoplay={{
								delay: 2100,
								disableOnInteraction: false,
							}}
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
				<div id="media" className="flex flex-col gap-10 py-24 px-4 lg:px-0">
					<div className="flex items-center justify-between">
						<div className="flex flex-col lg:gap-4 gap-2">
							<p className="lg:text-5xl text-3xl font-semibold font-Open-sans">Media</p>
							<div className="w-[70%] h-[4px] bg-primary-500" />
						</div>
						<div className="flex items-center gap-5 lg:hidden">
							<button
								onClick={() => swiperRef.current?.slidePrev()}
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
								onClick={() => swiperRef.current?.slideNext()}
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
							autoplay={{
								delay: 2000,
								disableOnInteraction: false,
							}}
							onBeforeInit={(swiper) => {
								swiperRef.current = swiper;
							}}
							loop={true}
							modules={[Autoplay]}
							className="mySwiper w-full px-8"
						>
							{mediaImages.map((item, index) => (
								<SwiperSlide className="w-full flex flex-col gap-3 group" key={index}>
									<img src={item} alt="" className="w-full h-96 object-cover rounded-xl" />
								</SwiperSlide>
							))}
						</Swiper>
						<button
							onClick={() => swiperRef.current?.slidePrev()}
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
							onClick={() => swiperRef.current?.slideNext()}
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
	);
};

export default Engagement;
