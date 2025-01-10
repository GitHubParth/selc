import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay } from 'swiper/modules';

const ProjectDetails = () => {
	const { project } = useParams();

	const teamMembers = [
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Co-Principal Investigator",
			email: "Co-Principal Investigator",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Co-Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Co-Principal Investigator",
			email: "Co-Principal Investigator",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Co-Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Co-Principal Investigator",
			email: "Co-Principal Investigator",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Research Fellows",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Research Interns",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Research Interns",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Research Interns",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			tiile:'',
			outcome:'',
			impact:'',
			geral:'',
			people:'',
		
		},
	];

	return (
		<div className="w-full min-h-screen bg-[#F1f1F1] py-20 px-4 lg:px-0">
			<div className="max-w-6xl h-full mx-auto py-20">
				<div className="flex flex-col lg:gap-4 gap-2">
					<p className="lg:text-5xl text-3xl lg:leading-[4rem] font-semibold font-Open-sans capitalize ">{project.replaceAll("-", " ")}</p>
					{/* <div className="lg:w-[12%] w-[30%] h-[4px] bg-primary-500" /> */}
				</div>
				<div className="flex flex-col gap-7">
					<div className="lg:mt-14 mt-8 w-full h-[400px] max-h-[400px] rounded-xl overflow-hidden">
						<img
							src="https://www.sydney.edu.au/content/dam/health-and-wellness/wellbeing-programs/man-on-treadmill.jpg/jcr:content/renditions/cq5dam.web.440.248.2x.jpeg"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col lg:gap-7 gap-5">
						<div className="flex flex-col gap-4">
							<p className="text-3xl font-semibold font-Open-sans uppercase">Background</p>
							<div className="md:w-[10%] w-[30%] h-[4px] bg-primary-500" />
						</div>
						<p className="text-justify lg:text-left">
							To ensure European independence and leadership in
							AI, and to unite a fragmented community, the AI4EU
							project sought to build a comprehensive European
							AI-on-demand platform to lower barriers to
							innovation, to boost technology transfer and
							catalyse the growth of start-ups and SMEs in all
							sectors.
						</p>
						<p className="text-justify lg:text-left">
							The challenge was to mobilise the broader AI
							Community to support and enrich the European
							AI-on-demand platform by sharing resources and
							success stories and using it as a tool to develop
							new research and innovations in AI.
						</p>
						<p className="text-justify lg:text-left">
							The project aimed to develop an AI on-demand
							platform that would act as a broker and one-stop
							shop providing and showcasing services, expertise,
							algorithms, software frameworks, development tools,
							components, modules, data, computing resources,
							prototyping functions, and access to funding. Built
							upon and interoperable with existing AI and data
							components and platforms, AI4EU sought to mobilise
							the whole European AI ecosystem of researchers and
							innovators and showcase leading scientific
							discoveries and technological innovations in AI.
						</p>
					</div>
					<div className="flex flex-col lg:gap-7 gap-5">
						<div className="flex flex-col gap-4">
							<p className="text-3xl font-semibold font-Open-sans uppercase">OUTCOME</p>
							<div className="md:w-[10%] w-[30%] h-[4px] bg-primary-500" />
						</div>
						<p className="text-justify lg:text-left">
							Insight led the transformation of the platform in
							the direction of an open development model,
							facilitating the bootstrapping of the technical
							development by the AI research community. This model
							provided transparency in the development roadmap and
							opened the platform to respond to the needs of
							target stakeholders.
						</p>
						<p className="text-justify lg:text-left">
							The AI-on-demand platform continues to represent a
							landmark initiative of the European Commission’s AI
							Research and Innovation Strategy. The AI4EU project
							developed the first iteration of the platform, and
							it continues to advance through the support of other
							funded projects, among them the €9m project
							AI4Europe, coordinated by Insight@UCC.
						</p>
						<p className="text-justify lg:text-left">
							Through the work initiated in AI4EU, the platform is
							now positioned to transform into a community-led
							initiative enriched for and by the European AI
							community. Over the forthcoming years, the
							expectation is that the platform will come to
							represent a core pillar of the research and
							innovation community, allowing researchers to
							experiment and test new solutions and for SMEs and
							public bodies to easily access and exploit the very
							best in AI research being undertaken in Europe.
						</p>
					</div>
					<div className="flex flex-col lg:gap-7 gap-5">
						<div className="flex flex-col gap-4">
							<p className="text-3xl font-semibold font-Open-sans uppercase">IMPACT</p>
							<div className="md:w-[8%] w-[30%] h-[4px] bg-primary-500" />
						</div>
						<p className="text-justify lg:text-left">
							The project established a minimum viable product of
							the on-demand platform that can further be developed
							and exploited by both Europe’s AI research community
							and SME/Public bodies seeking to integrate AI
							solutions. It continues to be supported by the EC
							and multiple connected projects and initiatives.
						</p>
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
							{teamMembers.map((member, index) => (
								<SwiperSlide key={index} className="w-full flex flex-col gap-3 group">
									<div className="w-full flex relative group rounded-xl overflow-hidden" key={index}>
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
