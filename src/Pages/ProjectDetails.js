import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay } from 'swiper/modules';

import Markdown from 'react-markdown'

import { projectData } from "../Variables/projectData"

const ProjectDetails = () => {
	const { project } = useParams();

	
	const currentProject = projectData.filter((individualProject) => individualProject.title.toLowerCase().replace(/ /g, "-") === project)
	console.log("currentProject",currentProject);

	return (
		<div className="w-full min-h-screen bg-[#F1f1F1] py-20 px-4 lg:px-0">
			<div className="max-w-6xl h-full mx-auto py-20">
				<div className="flex flex-col lg:gap-4 gap-2">
					<p className="lg:text-5xl text-3xl lg:leading-[4rem] font-semibold font-Open-sans capitalize ">{currentProject[0].title}</p>
					{/* <div className="lg:w-[12%] w-[30%] h-[4px] bg-primary-500" /> */}
				</div>
				<div className="flex flex-col gap-7">
					<div className="lg:mt-14 mt-8 w-full h-full max-h-[550px] rounded-xl overflow-hidden">
						<img
							src={currentProject[0].image}
							alt=""
							className="w-full h-full object-cover"
							onError={(e) => {
								e.target.src = "https://dummyimage.com/1920x1080/FFFFFF/000000&text=No%20Image%20Found"; // Replace with your default image path
							}}
						/>
					</div>
					<div id="project-desc" className="flex flex-col">
						<Markdown>{currentProject[0]["description"]}</Markdown>
					</div>
					<div className="flex flex-col lg:gap-7 gap-5">
						<div className="flex flex-col gap-4">
							<p className="text-3xl font-semibold font-Open-sans uppercase">TEAM</p>
							<div className="md:w-[5%] w-[30%] h-[4px] bg-primary-500" />
						</div>
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
									slidesPerView: 4,
								},
							}}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							modules={[Autoplay]}
							loop={true}
							className="mySwiper w-full px-8 select-none"
						>
							{currentProject[0].teamImages.map((member, index) => (
								<SwiperSlide key={index} className="w-full flex flex-col gap-3 group">
									<div className="w-full flex relative group rounded-xl overflow-hidden">
										<div className="w-full h-1 bg-primary-500 absolute bottom-0 left-0 z-10" />
										<img
											src={member.image}
											alt={member.name}
											className="w-96 h-80 object-cover"
										/>
										<div className="w-full text-white absolute bottom-0 transition-all duration-300 flex flex-col items-start justify-start gap-1 py-3 pb-4 px-4 bg-[rgba(0,0,0,0.8)]">
											<h1 className="text-xl font-bold text-white">{member.name}</h1>
											<p>{member.designation}</p>
											{/* <p>{member.degree}</p> */}
										</div>
									</div>
								</SwiperSlide>
							))}
							{/* <SwiperSlide className="w-full flex flex-col gap-3 group">
								<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover rounded-full" />
							</SwiperSlide> */}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
