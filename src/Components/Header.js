import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [activeDropdown, setactiveDropdown] = useState("");

	const navbarData = [
		{
			title: "Home",
			link: "/",
			submenus: [],
		},
		{
			title: "Our Team",
			link: "/people",
			submenus: [],
		},
		{
			title: "Publications",
			link: "/#research-project",
			submenus: [],
		},
		{
			title: "Work With Us",
			link: "/work-with-us",
			submenus: [],
		},
		{
			title: "Engagement",
			link: "/engagement",
			submenus: [],
		},
		{
			title: "About Us",
			link: "/about",
			submenus: [],
		},
	];

	return (
		<>
			<div className="fixed top-0 left-0 w-full bg-white h-20 border flex items-center justify-between z-50 shadow-[0_0_60px_0_rgba(0,0,0,.07)]">
				<Link to="/" className="lg:h-full lg:ml-3 ml-4 pr-2 lg:p-2 gap-3">
					{/* <img
						src="/images/daiict-logo.jpg"
						alt=""
						className="h-full object-cover opacity-75"
					/> */}
					<p className="lg:text-3xl text-base text-primary-1000 font-Open-sans font-semibold leading-tight mt-3">
						Smart Energy Learning Centre
					</p>
					{/* <p className="text-[9px] lg:text-xs text-primary-500 font-light font-Open-sans ">A New Research Centre at DA-IICT funded by BSES Delhi, India</p> */}
				</Link>
				<div className="lg:flex hidden items-center justify-between h-full px-5 bg-white">
					<div className="h-full">
						<ul className="flex gap-5 h-full">
							{navbarData.map((item, index) => (
								<li key={index} className="relative group h-full outline-none font-Open-sans">
									<a href={item?.link} className="uppercase text-base font-semibold h-full flex items-center justify-center group-hover:text-primary-500 transition-all duration-300">
										{item?.title}
									</a>
									<div className="absolute bottom-6 left-0 h-[2px] w-0 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
									{item?.submenus?.length > 0 && (
										<div className="absolute top-full -z-50 left-0 min-w-20 w-max bg-[rgba(0,0,0,0.8)] text-white p-5 px-6 opacity-0 origin-bottom -translate-y-full group-hover:opacity-100 hover:opacity-100 group-hover:translate-y-0 hover:translate-y-0 transition-all duration-[0.4s]">
											<ul className="flex flex-col gap-2">
												{item?.submenus?.map(
													(submenu, subIndex) => (
														<li key={subIndex} className="hover:text-primary-500 capitalize transition-all duration-300">
															<a href={submenu[1]}>{submenu[0]}</a>
														</li>
													)
												)}
											</ul>
										</div>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div
					onClick={() => {
						document.getElementById("mobileNavbar").classList.toggle("-top-full");
						document.getElementById("mobileNavbar").classList.toggle("top-20");
						if (document.getElementsByTagName("BODY")[0].style.overflow !== "hidden") {
							document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
						} else {
							document.getElementsByTagName("BODY")[0].style.overflow = "visible";
						}
						setactiveDropdown("");
					}}
					className="lg:hidden block pr-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="w-8 h-8 text-primary-600"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
						/>
					</svg>
				</div>
			</div>
			<div id="mobileNavbar" className="block lg:hidden fixed -top-full w-full min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] overflow-scroll bg-primary-500 z-40 text-white transition-all duration-300">
				<ul className="p-6 flex flex-col gap-3 h-full">
					{navbarData.map((item, index) => (
						<li key={index} className={"overflow-hidden transition-all duration-300 " + (activeDropdown === item.title ? "max-h-full" : "max-h-10")}>
							<div
								onClick={() => {
									setactiveDropdown(activeDropdown === item.title ? "" : item.title)
								}}
								className="flex items-center justify-between border-b pb-3"
							>
								<a
									href={item.link}
									onClick={() => {
										document.getElementById("mobileNavbar").classList.toggle("-top-full");
										document.getElementById("mobileNavbar").classList.toggle("top-20");
										if (document.getElementsByTagName("BODY")[0].style.overflow !== "hidden") {
											document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
										} else {
											document.getElementsByTagName("BODY")[0].style.overflow = "visible";
										}
										setactiveDropdown("");
									}}
								>
									{item.title.replace(" ▾", "")}
								</a>
								{item.submenus.length > 0 && (
									<i className={"fa-solid fa-plus transition-all duration-300 " + (activeDropdown === item.title ? "-rotate-45" : "")} ></i>
								)}
							</div>
							{item.submenus.length > 0 && (
								<div className={"origin-top transition-all duration-300 " + (activeDropdown === item.title ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0")}>
									<ul>
										{item.submenus.map(
											(submenu, submenuIndex) => (
												<li key={submenuIndex} className="px-6 py-3 border-b capitalize">
													<a href={submenu[1]}>{submenu[0]}</a>
												</li>
											)
										)}
									</ul>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Navbar;
