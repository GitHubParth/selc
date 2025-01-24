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
			title: "Research",
			link: "/#research",
			submenus: [["IoT Solutions", "/research/iot-solutions-for-energy-monitoring"], ["Recycle and Reuse", "/research/recycle-and-reuse"], ["Intelligent Energy", "/research/intelligent-energy-systems-and-data-analytics"], ["Utility-Driven Services", "/research/utility-driven-smart-energy-services"]],
		},
		// {
		// 	title: "Work With Us",
		// 	link: "/work-with-us",
		// 	submenus: [],
		// },
		// {
		// 	title: "Engagement",
		// 	link: "/engagement",
		// 	submenus: [],
		// },
		{
			title: "About Us",
			link: "/about",
			submenus: [["Vision & Mission", "/about#vision-mission"], ["Advisory Board", "/about#advisoryBoard"], ["Work With Us", "/work-with-us"]],
			// submenus: [["Vision & Mission", "/about#vision-mission"], ["Who We Are", "/about#who-are-we"], ["Governance", "/about#governance"], ["Work With Us", "/work-with-us"]],
		},
	];

	return (
		<>
			<div className="fixed top-0 left-0 w-full bg-white flex flex-col items-center justify-center z-50 shadow-[0_0_60px_0_rgba(0,0,0,.07)]">
				{/* <div className="bg-[#FEF4D4] w-full flex items-center justify-center">
					<div className="w-full max-w-6xl flex items-center justify-between md:pl-2 md:pr-5 px-4 py-2">
						<div>
					
							<p className="lg:text-2xl font-bold text-[#162053] ">Dhirubhai Ambani University</p>
						</div>
						<div className="flex gap-5 text-black">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 cursor-pointer hover:text-white transition-all duration-300" viewBox="0 0 16 16">
								<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 cursor-pointer hover:text-white transition-all duration-300" viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 cursor-pointer hover:text-white transition-all duration-300" viewBox="0 0 16 16">
								<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 cursor-pointer hover:text-white transition-all duration-300" viewBox="0 0 16 16">
								<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
							</svg>
						</div>
					</div>
				</div> */}
				<div className="w-full h-[100px] max-w-6xl flex items-center justify-between py-2 md:py-0">
					<Link to="/" className="lg:h-full pr-2 pl-4 md:pl-0 gap-3 flex items-center justify-center">
						<img
							src="/images/Logo/SELCLogo.png"
							alt=""
							className="h-full w-full  -ml-5"
						/>
						<p className="lg:text-3xl text-base text-primary-100 font-Open-sans font-semibold leading-tight">
							
							{/* <span className="text-[#3B7DED] md:text-5xl">S</span>MART <span className="text-[#3B7DED] md:text-5xl">E</span>NERGY <span className="text-[#3B7DED] md:text-5xl">L</span>EARNING <span className="text-[#3B7DED] md:text-5xl">C</span>ENTER */}
						</p>
						{/* <p className="text-[9px] lg:text-xs text-primary-500 font-light font-Open-sans ">A New Research Centre at DA-IICT funded by BSES Delhi, India</p> */}
					</Link>
					<div className="lg:flex hidden items-center justify-between h-full px-5">
						<div className="h-full">
							<ul className="flex gap-5 h-full">
								{navbarData.map((item, index) => (
									<li key={index} className="relative group h-full outline-none font-Open-sans">
										<a href={item?.link} className=" text-xl font-semibold h-full flex items-center justify-center text-[#293584] group-hover:text-primary-500 transition-all duration-300">
											{item?.title}
										</a>
										<div className="absolute left-0 bottom-1/2 translate-y-[15px] h-[2px] w-0 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
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
							document.getElementById("mobileNavbar").classList.toggle("top-24");
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
			</div>
			<div id="mobileNavbar" className="block lg:hidden fixed -top-full w-full overflow-scroll bg-primary-500 z-40 text-white transition-all duration-300">
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
										document.getElementById("mobileNavbar").classList.toggle("top-24");
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
													<a 
														href={submenu[1]}
														onClick={() => {
															document.getElementById("mobileNavbar").classList.toggle("-top-full");
															document.getElementById("mobileNavbar").classList.toggle("top-24");
															if (document.getElementsByTagName("BODY")[0].style.overflow !== "hidden") {
																document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
															} else {
																document.getElementsByTagName("BODY")[0].style.overflow = "visible";
															}
															setactiveDropdown("");
														}}
													>
														{submenu[0]}
													</a>
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
