import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import HomePage from "./Pages/HomePage";
import People from "./Pages/People";
import ProjectDetails from "./Pages/ProjectDetails";
import AboutUs from "./Pages/AboutUs";
import Engagement from "./Pages/Engagement";
import WorkWithUs from "./Pages/WorkWithUs"
import ContactUs from "./Pages/ContactUs";
import ThemeProjects from "./Pages/ThemeProjects";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUs />} />
				{/* <Route path="/contact-us" element={<ContactUs />} /> */}
				<Route path="/research/:theme" element={<ThemeProjects />} />
				<Route path="/people" element={<People />} />
				<Route path="/people/:role" element={<People />} />
				<Route path="/project/:project" element={<ProjectDetails />} />
				<Route path="/engagement" element={<Engagement />} />
				<Route path="/work-with-us" element={<WorkWithUs />} />
				<Route path="/work-with-us/:role" element={<WorkWithUs />} />
				<Route path="*" element={<div className="w-full h-screen relative"><h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-500 text-center text-6xl font-bold font-Open-sans leading-[70px] lg:leading-normal lg:whitespace-nowrap capitalize">Page not found</h1></div>} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
