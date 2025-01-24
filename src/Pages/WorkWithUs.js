import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const WorkWithUs = () => {
	const { role } = useParams("role");

	const [activeDropdown, setActiveDropdown] = useState(role ? role : "Research Fellows");
	const [currRole, setCurrRole] = useState(role ? role : "All");
	const [filter, setFilter] = useState(false);

	const roles = ["All", "Research Fellows", "Project Interns", "Staff"];

	const researchFellowData = [
		{
			title: "Research Assistant – Program synthesis Data Science Institute/Insight SFI Research Centre for Data Analytics",
			posted_on: "24 JULY 2024",
			closes_on: "15 AUGUST 2024",
			location: "Gandhinagar",
			role: "Research Fellows"
		},
		{
			title: "Postdoctoral Researcher/Research Associate – Program synthesis Data Science Institute/Insight SFI Research Centre for Data Analytics",
			posted_on: "24 JULY 2024",
			closes_on: "15 AUGUST 2024",
			location: "Gandhinagar",
			role: "Research Fellows"
		},
		{
			title: "Research Assistant – Program synthesis Data Science Institute/Insight SFI Research Centre for Data Analytics",
			posted_on: "24 JULY 2024",
			closes_on: "15 AUGUST 2024",
			location: "Gandhinagar",
			role: "Staff"
		},
		{
			title: "Postdoctoral Researcher – ATU-IoT-Collaboration-Project Insight SFI Research Centre for Data Analytics",
			posted_on: "24 JULY 2024",
			closes_on: "15 AUGUST 2024",
			location: "Gandhinagar",
			role: "Project Interns"
		},
	]

	const jobs = researchFellowData.filter(filterRole);

	function filterRole(jobs) {
		if (jobs.role === currRole || currRole === "All") {
			return jobs;
		}
	}

	return (
		<div className="w-full font-Open-sans pt-20">
			{/* <div className="w-full h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=1080&lazy=load')] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-end border-b-4 border-primary-500">
				<div className="py-20 max-w-6xl mx-auto flex flex-col gap-8">
					<p className="text-6xl italic font-Nunito">Work With Us</p>
					<div className="h-[5px] w-[12%] bg-primary-500"></div>
					<p className="text-2xl font-normal leading-10 w-[50%]">
						Our researchers are tackling the world’s greatest
						problems, from creating a more sustainable world to
						developing new treatments for chronic diseases.
					</p>
				</div>
			</div> */}
			{/* <h1 className="w-full max-w-6xl mx-auto text-7xl font-bold mt-20 pt-20 text-primary-600">Work With Us</h1> */}
			<div className="flex flex-col items-start md:items-center max-w-6xl mx-auto w-full pt-16 pb-4 px-4 lg:px-0">
				<ul className="hidden md:flex items-center justify-center flex-wrap gap-4 md:gap-y-2">
					{roles.map((des, i) => (
						<li
							key={i}
							onClick={() => setCurrRole(des)}
							className={`p-2 px-4 text-lg font-medium font-Inter rounded-lg transition-colors duration-300 cursor-pointer hover:bg-primary-200 ${currRole === des ? "bg-primary-200 text-primary-800" : ""} `}
						>
							{des}
						</li>
					))}
				</ul>
				<div className="w-full relative md:hidden block">
					<div
						className="flex items-center justify-between border pr-4 rounded-xl overflow-hidden border-primary-600"
						onClick={() => setFilter(!filter)}
					>
						<p className="border-r border-primary-600 w-[89%] px-3 py-2">{currRole}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							fill="currentColor"
							className=""
							viewBox="0 0 16 16"
						>
							<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
						</svg>
					</div>
					<div className={"w-full absolute top-11 p-3 bg-transparent backdrop-blur-lg rounded-xl border border-black flex flex-col gap-3 z-10 origin-top transition-all duration-300 " + (filter ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0")}>
						{roles.map((des, i) => (
							<p
								key={i}
								onClick={() => {
									setCurrRole(des)
									setFilter(!filter)
								}}
							>
								{des}
							</p>
						))}
					</div>
				</div>
				<h1 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative">{currRole}</h1>
					{jobs.map((item, idx) => {
						return (
							<div
								className="w-full border-t border-gray-400 first:border-0 py-4 md:px-3"
								key={idx}
								onClick={() => {
									// const pdfUrl = "https://css4.pub/2015/icelandic/dictionary.pdf";
									// const link = document.createElement("a");
									// link.href = pdfUrl;
									// link.download = "https://css4.pub/2015/icelandic/dictionary.pdf"; // specify the filename
									// document.body.appendChild(link);
									// link.click();
									// document.body.removeChild(link);
								}}
							>
								<h2 className="md:text-2xl text-sm text-justify md:text-left cursor-pointer transition-all duration-300 hover:text-primary-700">{item.title}</h2>
								<div className="w-full text-sm md:mt-4 mt-3 flex md:flex-row flex-col md:items-center items-start justify-between lg:gap-4 gap-1">
									<p className="font-medium text-primary-600 flex items-center gap-1">Posted :<span className="text-black font-normal">{item.posted_on}</span></p>
									<p className="font-medium text-primary-600 flex items-center gap-1">Closes :<span className="text-black font-normal">{item.closes_on}</span></p>
									<p className="font-medium text-primary-600 flex items-center gap-1">Location :<span className="text-black font-normal">{item.location}</span></p>
								</div>
							</div>
						)
					})}
			</div>
			{/* <div id="research-fellows" className="max-w-6xl w-full h-fit mx-auto pt-10 lg:px-0 md:px-12 sm:px-10 px-4">
				<div className="w-full flex items-center justify-between border-b-[1px] border-black" onClick={() => { setActiveDropdown(activeDropdown === "Research Fellows" ? "" : "Research Fellows"); }}>
					<h1 className="lg:text-4xl text-2xl w-full leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative lg:before:w-32 before:w-24 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">Research Fellows</h1>
					<div className="p-2 bg-primary-500/5 cursor-pointer rounded-full shadow">
						<svg
							fill="currentColor"
							className={"w-6 h-6 transition-all duration-300 " + (activeDropdown === "Research Fellows" ? "-rotate-180" : "rotate-0")}
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
							/>
						</svg>
					</div>
				</div>
				<div className={"w-full last:border-b last:border-gray-400 origin-top transition-all duration-300 " + (activeDropdown === "Research Fellows" ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0")}>
					{researchFellowData.map((item, idx) => {
						return (
							<div
								className="w-full border-t border-gray-400 first:border-0 py-4 md:px-3"
								key={idx}
								onClick={() => {
									// const pdfUrl = "https://css4.pub/2015/icelandic/dictionary.pdf";
									// const link = document.createElement("a");
									// link.href = pdfUrl;
									// link.download = "https://css4.pub/2015/icelandic/dictionary.pdf"; // specify the filename
									// document.body.appendChild(link);
									// link.click();
									// document.body.removeChild(link);
								}}
							>
								<h2 className="md:text-2xl text-sm text-justify md:text-left cursor-pointer transition-all duration-300 hover:text-primary-700">{item.title}</h2>
								<div className="w-full text-sm md:mt-4 mt-3 flex md:flex-row flex-col md:items-center items-start justify-between lg:gap-4 gap-1">
									<p className="font-medium text-primary-600 flex items-center gap-1">Posted :<span className="text-black font-normal">{item.posted_on}</span></p>
									<p className="font-medium text-primary-600 flex items-center gap-1">Closes :<span className="text-black font-normal">{item.closes_on}</span></p>
									<p className="font-medium text-primary-600 flex items-center gap-1">Location :<span className="text-black font-normal">{item.location}</span></p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div id="project-interns" className="max-w-6xl w-full h-full mx-auto pt-10 lg:px-0 md:px-12 sm:px-10 px-4">
				<div className="w-full flex items-center justify-between border-b-[1px] border-black" onClick={() => { setActiveDropdown(activeDropdown === "Project Interns" ? "" : "Project Interns"); }}>
					<h1 className="lg:text-4xl text-2xl w-full leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative lg:before:w-32 before:w-20 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">Project Interns</h1>
					<div className="p-2 bg-primary-500/5 cursor-pointer rounded-full shadow">
						<svg
							fill="currentColor"
							className={"w-6 h-6 transition-all duration-300 " + (activeDropdown === "Project Interns" ? "-rotate-180" : "rotate-0")}
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
							/>
						</svg>
					</div>
				</div>
				<div className={"w-full last:border-b last:border-gray-400 origin-top transition-all duration-300 " + (activeDropdown === "Project Interns" ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0")}>
					{researchFellowData.map((item, idx) => {
						return (
							<div className="w-full border-t border-gray-400 py-4 md:px-3 first:border-0" key={idx}>
								<h2 className="md:text-2xl text-sm text-justify md:text-left cursor-pointer transition-all duration-300 hover:text-primary-700">{item.title}</h2>
								<div className="w-full text-sm md:mt-4 mt-3 flex md:flex-row flex-col md:items-center items-start justify-between lg:gap-4 gap-1">
									<p className="font-medium text-primary-600 flex items-center gap-1">Posted :<span className="text-black font-normal">{item.posted_on}</span></p>
									<p className="font-medium text-primary-600 flex items-center gap-1">Closes :<span className="text-black font-normal">{item.closes_on}</span></p>
									<p className="font-medium text-primary-600 flex items-center gap-1">Location :<span className="text-black font-normal">{item.location}</span></p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div id="staff" className="max-w-6xl w-full h-full mx-auto py-10 lg:px-0 md:px-12 sm:px-10 px-4">
				<div className="w-full flex items-center justify-between border-b-[1px] border-black" onClick={() => { setActiveDropdown(activeDropdown === "Staff" ? "" : "Staff"); }}>
					<h1 className="lg:text-4xl text-2xl w-full leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative lg:before:w-12 before:w-10 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">Staff</h1>
					<div className="p-2 bg-primary-500/5 cursor-pointer rounded-full shadow">
						<svg
							fill="currentColor"
							className={"w-6 h-6 transition-all duration-300 " + (activeDropdown === "Staff" ? "-rotate-180" : "rotate-0")}
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
							/>
						</svg>
					</div>
				</div>
				<div className={"w-full last:border-b last:border-gray-400 origin-top transition-all duration-300 " + (activeDropdown === "Staff" ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0")}>
					{researchFellowData.map((item, idx) => {
						return (
							<div className="w-full border-t border-gray-400 py-4 md:px-3 first:border-0" key={idx}>
								<h2 className="md:text-2xl text-sm text-justify md:text-left cursor-pointer transition-all duration-300 hover:text-primary-700">{item.title}</h2>
								<div className="w-full text-sm md:mt-4 mt-3 flex md:flex-row flex-col md:items-center items-start justify-between lg:gap-4 gap-1">
									<p className="font-medium text-primary-600 flex items-center gap-1">Posted :<span className="text-black font-normal">{item.posted_on}</span></p>
									<p className="font-medium text-primary-600 flex items-center gap-1">Closes :<span className="text-black font-normal">{item.closes_on}</span></p>
									<p className="font-medium text-primary-600 flex items-center gap-1">Location :<span className="text-black font-normal">{item.location}</span></p>
								</div>
							</div>
						)
					})}
				</div>
			</div> */}
		</div>
	)
}

export default WorkWithUs