import React from 'react'
import { useParams } from "react-router-dom";

// Components
import GridCards from '../Components/GridCards'

import { projectData } from "../Variables/projectData"

const ThemeProjects = () => {
	const { theme } = useParams()

	const projectsData = [
		{
			theme: "iot-solutions-for-energy-monitoring",
			projects:[
				{
					image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/Hala-new-2.JPG/jcr:content/renditions/cq5dam.web.440.296.2x.jpeg",
					name: "Energy Efficient and Reliable Solutions to Monitoring, Data Collection, and Security of Non Centralized Wireless Mesh Networks: Routing Protocols and Coding Schemes",
					desc: "PI : Abhishek Jindal and Manish Kumar",
					link: "energy-efficient-and-reliable-solutions-to-monitoring-data-collection-and-security-of-non-centralized-wireless-mesh-networks-routing-protocols-and-coding-schemes",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Real-Time Infrastructure Monitoring to Reduce Carbon Emission at Energy Generation Processes",
					desc: "PI : Sujay Kadam",
					link: "real-time-infrastructure-monitoring-to-reduce-carbon-emission-at-energy-generation-processes",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Energy Efficient Smart Metering System Using Edge Computing",
					desc: "PI : Tapas Kumar Maiti",
					link: "energy-efficient-smart-metering-system-using-edge-computing",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Drone based Coal Mine Health Survey and Monitoring",
					desc: "PI : Yash Agrawal, Vinay S. Palaparthy and  Sujay Kadam",
					link: "drone-based-coal-mine-health-survey-and-monitoring",
				},
			]
		},
		{
			theme: "recycle-and-reuse",
			projects:[
				{
					image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/Hala-new-2.JPG/jcr:content/renditions/cq5dam.web.440.296.2x.jpeg",
					name: "Interactive Energy Visualization Platform",
					desc: "PI : Anupam Rana",
					link: "interactive-energy-visualization-platform",
				},	
			]
		},
		{
			theme: "intelligent-energy-systems-and-data-analytics",
			projects:[
				{
					image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/Hala-new-2.JPG/jcr:content/renditions/cq5dam.web.440.296.2x.jpeg",
					name: "Building Renewable Energy Data Ecosystem for Informed Decision-Making",
					desc: "PI : Arpit Rana, Sreeja Rajendran and Thathagata Bandhyopadhyay",
					link: "building-renewable-energy-data-ecosystem-for-informed-decision-making",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Renewable Energy Data Ecosystem for Informed Decision Making - Knowledge Discovery for Application of Plasma Science and Engineering to Renewable and Green Energy Strategy",
					desc: "PI : Bhaskar Chaudhury",
					link: "renewable-energy-data-ecosystem-for-informed-decision-making-knowledge-discovery-for-application-of-plasma-science-and-engineering-to-renewable-and-green-energy-strategy",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Battery-Less Devices: Energy Autonomy in Future Electronic Systems",
					desc: "PI : Biswajit Mishra",
					link: "battery-less-devices-energy-autonomy-in-future-electronic-systems",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Re-using and repurposing smartphones for energy efficient edge computing",
					desc: "PI : P.S.Kalyan Sasidhar",
					link: "re-using-and-repurposing-smartphones-for-energy-efficient-edge-computing",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Improving Efficiency of Solar Energy Harvesting using Metasurface Design",
					desc: "PI : Pankaj Kumar",
					link: "improving-efficiency-of-solar-energy-harvesting-using-metasurface-design",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/Hala-new-2.JPG/jcr:content/renditions/cq5dam.web.440.296.2x.jpeg",
					name: "Enhancing Wind Power Decision-Making with Forecasting and Uncertainty Quantification",
					desc: "PI : Pritam Anand",
					link: "enhancing-wind-power-decision-making-with-forecasting-and-uncertainty-quantification",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Complex Network Modelling of Carbon Emission and a data driven construction of a Carbon Price Index",
					desc: "PI : Prosenjit Kundu and  Bhaskar Chaudhury",
					link: "complex-network-modelling-of-carbon-emission-and-a-data-driven-construction-of-a-carbon-price-index",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "An Open Generic Self-Healing Hardware to Monitor IoT Nodes Life and Improve In-Field Reliability",
					desc: "PI : Vinay S. Palaparthy, Yash Agrawal and  Sujay Kadam",
					link: "an-open-generic-self-healing-hardware-to-monitor-iot-nodes-life-and-improve-in-field-reliability",
				},
				{
					image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
					name: "Development of a machine learning-based framework for real-time anomaly detection in electricity consumption data",
					desc: "PI : Yash Vasavada",
					link: "development-of-a-machine-learning-based-framework-for-real-time-anomaly-detection-in-electricity-consumption-data",
				}
			]
		},
		{
			theme: "utility-driven-smart-energy-services",
			projects:[]
		},
	]

	const themesData = [
		{
			image: "/images/IOT.jpg",
			name: "IoT Solutions for Energy Monitoring",
			link: "iot-solutions-for-energy-monitoring",
		},
		{
			image: "/images/R&R.jpg",
			name: "Recycle and Reuse",
			link: "recycle-and-reuse",
		},
		{
			image: "/images/IESDA.jpg",
			name: "Intelligent Energy Systems and Data Analytics",
			link: "intelligent-energy-systems-and-data-analytics",
		},
		{
			image: "/images/UDSES.jpg",
			name: "Utility-Driven Smart Energy Services",
			link: "utility-driven-smart-energy-services",
		},
	]

	return (
		<>
			<section className='pt-20'>
				<div
					className="w-full min-h-screen lg:py-28 py-20"
					style={{ backgroundColor: "rgb(241, 241, 241)" }}
					>
					<div className="lg:max-w-6xl w-full px-4 lg:px-0 mx-auto flex flex-col gap-8">
						<div className="flex flex-col gap-4">
							<p className="lg:text-5xl text-3xl font-semibold font-Open-sans capitalize">
								{theme.replace(/-/g, " ")}
							</p>
							<div className="w-[12%] h-[4px] bg-primary-500" />
						</div>
						<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
							{projectData.filter((project) => theme === project.theme?.toLowerCase().replace(/ /g, "-")).map((project,index) => (
								<div 
									key={index} 
									className="w-full h-full lg:min-h-[550px] lg:max-h-[550px] group"
									onClick={() => {
										window.location.href = "/project/" + project.title.toLowerCase().replace(/ /g, "-")
									}}
								>
									<div className="w-full h-96 overflow-hidden rounded-xl">
										<img
											src={project.image}
											alt=""
											className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
											onError={(e) => {
												e.target.src = "https://dummyimage.com/450x450/FFFFFF/000000&text=No%20Image%20Found"; // Replace with your default image path
											}}
										/>
									</div>
									<div className="flex flex-col justify-evenly">
										<div className="flex flex-col gap-0.5 lg:mt-5 mt-3">
											<p className="lg:text-2xl text-xl font-semibold group-hover:text-primary-500 line-clamp-2 transition-all duration-300">
												{project.title}
											</p>
										<div className="w-0 group-hover:w-[15%] h-[2px] bg-primary-500 transition-all duration-300" />
									</div>
									{project.teamImages && project.teamImages.length > 0 && 
										(
											<p className="line-clamp-4 lg:mt-4 mt-3 text-xs lg:text-base">
												PI : 
												{project.teamImages?.filter((teamMember) => teamMember["designation"] === "Principal Investigator").map((teamMember, teamIndex) => (
													<span key={teamIndex} className="font-semibold"> {teamMember.name}{teamIndex < project.teamImages.filter((teamMember) => teamMember["designation"] === "Principal Investigator").length - 1 ? ', ' : ''}</span>
												))}
											</p>
										)
									}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* <section className='pt-20'>
				{projectsData.map(data => data.theme).includes(theme) ? 
					<GridCards
						id="research-project"
						cols="3"
						title={theme.replace(/-/g, ' ').toUpperCase()}
						data={projectsData.find(data => data.theme === theme).projects.length > 0 ? projectsData.find(data => data.theme === theme).projects : []}
						bgColor="#F1F1F1"
						redirect="/project/"
					/> : 
					<div className="w-full h-screen relative">
						<h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-500 text-center text-6xl font-bold font-Open-sans leading-[70px] lg:leading-normal lg:whitespace-nowrap capitalize">No Projects</h1>
					</div>
				}
			</section> */}
			<section>
				<GridCards
					id="research-project"
					cols="3"
					title="Other Themes"
					data={themesData.filter(data => data.link !== theme)}
					bgColor="#F1F1F1"
					redirect="/research/"
				/>
			</section>
		</>
	)
}

export default ThemeProjects
