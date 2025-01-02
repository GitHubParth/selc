import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay } from 'swiper/modules';

const AboutUs = () => {
	return (
		<div className="w-full font-Open-sans mt-20">
			{/* <div className="w-full h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('https://www.sydney.edu.au/content/dam/corporate/images/lambert-initiative/about/quad-emtpy.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg')] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-end border-b-4 border-primary-500">
				<div className="py-20 max-w-6xl mx-auto flex flex-col gap-8">
					<p className="text-6xl italic font-Nunito">About Us</p>
					<div className="h-[5px] w-[12%] bg-primary-500"></div>
					<p className="text-2xl font-normal leading-10 w-[50%]">
						Our researchers are tackling the world’s greatest
						problems, from creating a more sustainable world to
						developing new treatments for chronic diseases.
					</p>
				</div>
			</div> */}
			<div className="w-full max-w-6xl mx-auto py-14 px-4 lg:px-0">
				<div className="w-full">
					<h2 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mb-6 md:mb-10 relative lg:before:w-[12%] before:w-[30%] before:absolute before:h-1 before:bg-primary-500 before:-bottom-1 before:left-0">About Us</h2>
					<p className="md:text-lg mb-5 text-justify lg:text-left">At Insight SFI Research Centre for Data Analytics, we undertake high impact research in data analytics that has significant benefits for the individual, industry and society by enabling better decision making. All of our research is informed by our vision; Empowering Citizens. Smarter Societies.</p>
					<p className="md:text-lg text-justify lg:text-left">Making good decisions is dependent on having the best and most accurate information at your fingertips. Our research helps to transform data into knowledge.</p>
				</div>
				<div className="w-full pt-20">
					<h2 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mb-6 md:mb-10 relative lg:before:w-[12%] before:w-[30%] before:absolute before:h-1 before:bg-primary-500 before:-bottom-1 before:left-0">Vision & Mission</h2>
				</div>
				<div className="w-full py-6 flex items-start  gap-10">
					<div className="w-[30%] min-h-[600px] h-[600px] max-h-[600px] overflow-hidden">
						<div className="relative w-full overflow-hidden h-[40%]">
							<img src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1080" alt="" className="w-full h-full object-cover" />
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
								<p className="text-white text-4xl font-bold">Vision</p>
							</div>
						</div>
						<div className="w-full p-5 bg-gradient-to-t from-[#F1F1F1] to-[#FFFFFF] h-[60%] flex flex-col justify-center relative">
							<div className="bg-[#FFFFFF] rounded-full p-6 flex items-center justify-center absolute -top-[25%] left-1/2 transform -translate-x-1/2 translate-y-1/2">
								<svg
									height="50px"
									width="50px"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									viewBox="0 0 512 512"
								>
									<g>
										<g>
										<path d="M509.778,250.021C505.152,244.672,394.926,118.857,256,118.857S6.848,244.672,2.222,250.03 c-2.962,3.429-2.962,8.521,0,11.95C6.848,267.328,117.074,393.143,256,393.143S505.152,267.328,509.778,261.97 C512.741,258.542,512.741,253.449,509.778,250.021z M21.568,256c16.64-17.481,69.477-69.019,138.862-98.158 c-25.6,24.923-41.573,59.694-41.573,98.158c0,38.464,15.973,73.234,41.573,98.158C91.045,325.02,38.208,273.481,21.568,256z  M256,374.857c-65.536,0-118.857-53.321-118.857-118.857S190.464,137.143,256,137.143S374.857,190.464,374.857,256 S321.536,374.857,256,374.857z M351.579,354.158c25.591-24.923,41.563-59.694,41.563-98.158c0-38.464-15.973-73.234-41.573-98.158 c69.385,29.138,122.222,80.677,138.862,98.158C473.792,273.481,420.965,325.02,351.579,354.158z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M182.857,256h18.286c0-30.254,24.603-54.857,54.857-54.857v-18.286C215.671,182.857,182.857,215.671,182.857,256z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M310.857,256c0,30.254-24.603,54.857-54.857,54.857v18.286c40.329,0,73.143-32.814,73.143-73.143H310.857z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M104.923,84.489c-4.855,4.288-9.563,8.805-14.007,13.449l13.202,12.645c4.087-4.27,8.43-8.439,12.901-12.379 L104.923,84.489z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M56.347,144.677c-3.136,5.632-6.08,11.474-8.731,17.353l16.658,7.525c2.45-5.413,5.147-10.779,8.037-15.963 L56.347,144.677z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M407.232,84.626l-12.105,13.705c4.462,3.941,8.795,8.101,12.882,12.389l13.221-12.635 C416.786,93.431,412.069,88.905,407.232,84.626z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M246.418,27.63c-6.464,0.265-12.974,0.814-19.355,1.618l2.304,18.149c5.87-0.75,11.858-1.253,17.81-1.499L246.418,27.63z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M341.458,43.95l-6.839,16.951c5.504,2.222,10.971,4.709,16.265,7.387l8.256-16.311 C353.399,49.07,347.447,46.363,341.458,43.95z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M207.909,32.503c-6.29,1.344-12.608,2.99-18.798,4.873l5.33,17.49c5.696-1.737,11.52-3.246,17.307-4.489L207.909,32.503z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M78.08,112.521c-4.078,5.047-7.963,10.304-11.547,15.625l15.159,10.231c3.301-4.882,6.875-9.719,10.624-14.373 L78.08,112.521z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M304.338,32.558l-3.849,17.874c5.797,1.243,11.621,2.761,17.289,4.507l5.367-17.481 C316.983,35.566,310.656,33.911,304.338,32.558z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M265.829,27.639l-0.777,18.267c5.97,0.247,11.968,0.759,17.819,1.509l2.313-18.139 C278.821,28.471,272.311,27.913,265.829,27.639z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M455.753,144.878l-15.973,8.896c2.898,5.211,5.605,10.587,8.027,15.973l16.677-7.515 C461.842,156.37,458.917,150.537,455.753,144.878z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M136.11,61.367c-5.504,3.401-10.917,7.067-16.082,10.898l10.898,14.693c4.754-3.529,9.719-6.903,14.793-10.03 L136.11,61.367z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M434.03,112.686l-14.235,11.474c3.73,4.626,7.296,9.463,10.615,14.382l15.168-10.231 C441.966,122.962,438.089,117.705,434.03,112.686z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M376.073,61.486l-9.627,15.543c5.056,3.136,10.03,6.51,14.793,10.039l10.898-14.674 C386.971,68.553,381.559,64.878,376.073,61.486z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M170.761,43.858c-5.943,2.395-11.904,5.093-17.701,8.009l8.238,16.329c5.33-2.688,10.816-5.166,16.293-7.378 L170.761,43.858z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M282.633,464.603c-5.87,0.75-11.858,1.253-17.81,1.499l0.759,18.267c6.464-0.265,12.974-0.814,19.355-1.618 L282.633,464.603z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M229.129,464.585l-2.313,18.139c6.363,0.805,12.873,1.362,19.355,1.637l0.777-18.267 C240.978,465.847,234.981,465.335,229.129,464.585z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M194.222,457.061l-5.367,17.481c6.162,1.893,12.489,3.547,18.807,4.901l3.849-17.874 C205.705,460.315,199.89,458.798,194.222,457.061z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M317.559,457.134c-5.696,1.737-11.52,3.246-17.307,4.489l3.84,17.874c6.29-1.344,12.608-2.99,18.798-4.873 L317.559,457.134z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M103.991,401.28L90.77,413.915c4.443,4.654,9.161,9.179,13.998,13.458l12.105-13.705 C112.411,409.728,108.078,405.568,103.991,401.28z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M64.192,342.254l-16.677,7.515c2.642,5.861,5.568,11.694,8.731,17.353l15.973-8.896 C69.321,353.015,66.615,347.639,64.192,342.254z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M81.582,373.458l-15.159,10.231c3.611,5.349,7.488,10.606,11.547,15.625l14.226-11.474 C88.466,383.214,84.901,378.377,81.582,373.458z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M130.77,424.933l-10.898,14.674c5.157,3.84,10.569,7.515,16.055,10.907l9.627-15.543 C140.498,431.845,135.525,428.471,130.77,424.933z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M161.115,443.721l-8.256,16.311c5.751,2.907,11.703,5.614,17.682,8.027l6.839-16.951 C171.877,448.887,166.409,446.4,161.115,443.721z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M381.074,425.042c-4.754,3.529-9.719,6.903-14.793,10.03l9.609,15.561c5.504-3.401,10.917-7.067,16.082-10.898 L381.074,425.042z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M350.711,443.803c-5.33,2.688-10.816,5.166-16.293,7.378l6.821,16.96c5.943-2.395,11.904-5.093,17.701-8.009 L350.711,443.803z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M407.881,401.417c-4.087,4.27-8.43,8.439-12.901,12.379l12.096,13.714c4.855-4.288,9.563-8.805,14.007-13.449 L407.881,401.417z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M447.726,342.446c-2.45,5.413-5.147,10.779-8.037,15.963l15.963,8.914c3.136-5.632,6.08-11.474,8.731-17.353 L447.726,342.446z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M430.309,373.623c-3.301,4.882-6.875,9.719-10.624,14.373l14.235,11.483c4.078-5.047,7.963-10.304,11.547-15.625 L430.309,373.623z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M9.143,0C4.096,0,0,4.096,0,9.143v45.714h18.286V18.286h36.571V0H9.143z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M502.857,0h-45.714v18.286h36.571v36.571H512V9.143C512,4.096,507.904,0,502.857,0z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M18.286,493.714v-36.571H0v45.714C0,507.904,4.096,512,9.143,512h45.714v-18.286H18.286z" />
										</g>
									</g>
									<g>
										<g>
										<path d="M493.714,457.143v36.571h-36.571V512h45.714c5.047,0,9.143-4.096,9.143-9.143v-45.714H493.714z" />
										</g>
									</g>
								</svg>
							</div>
							<p className="md:text-lg text-justify lg:text-center">To revolutionize the global energy landscape and pave the way for a smart, energy-efficient, and carbon-neutral future.</p>
						</div>
					</div>
					<div className="w-[30%] min-h-[600px] h-[600px] max-h-[600px] overflow-hidden">
						<div className="relative w-full overflow-hidden h-[40%]">
							<img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1080" alt="" className="w-full h-full object-cover" />
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
								<p className="text-white text-4xl font-bold">Mission</p>
							</div>
						</div>
						<div className="w-full p-5 bg-gradient-to-t from-[#F1F1F1] to-[#FFFFFF] h-[60%] flex flex-col justify-center relative">
							<div className="bg-[#FFFFFF] rounded-full p-6 flex items-center justify-center absolute -top-[25%] left-1/2 transform -translate-x-1/2 translate-y-1/2">
								<svg
									fill="#000000"
									width="50px"
									height="50px"
									viewBox="0 0 36 36"
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										d="M18,2a15.92,15.92,0,0,0-4.25.59l.77,1.86a14.07,14.07,0,1,1-10,10l-1.86-.78A16,16,0,1,0,18,2Z"
										className="clr-i-outline clr-i-outline-path-1"
									/>
									<path
										d="M7.45,15.7a10.81,10.81,0,1,0,8.3-8.26L16.37,9A9.24,9.24,0,1,1,9,16.32Z"
										className="clr-i-outline clr-i-outline-path-2"
									/>
									<path
										d="M18,22.09a4.08,4.08,0,0,1-4-3.68l-1.63-.68c0,.09,0,.18,0,.27A5.69,5.69,0,1,0,18,12.31h-.24L18.43,14A4.07,4.07,0,0,1,18,22.09Z"
										className="clr-i-outline clr-i-outline-path-3"
									/>
									<path
										d="M8.2,13.34a.5.5,0,0,0,.35.15H12.2l5.37,5.37A1,1,0,0,0,19,17.44L13.53,12V8.51a.5.5,0,0,0-.15-.35L7.79,2.57a.5.5,0,0,0-.85.35v4H3a.5.5,0,0,0-.35.85Z"
										className="clr-i-outline clr-i-outline-path-4"
									/>
									<rect x={0} y={0} width={36} height={36} fillOpacity={0} />
								</svg>
							</div>
							<p className="md:text-lg text-justify lg:text-center">To drive transformative solutions in sustainable energy by fostering interdisciplinary collaboration, advancing cutting-edge research, and building strong partnerships that empower stakeholders toward a smarter, energy-efficient, and carbon-neutral world.</p>
						</div>
					</div>
				</div>
				<div id="who-are-we" className="w-full py-20">
					<h2 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mb-6 md:mb-10 relative lg:before:w-[12%] before:w-[30%] before:absolute before:h-1 before:bg-primary-500 before:-bottom-1 before:left-0">Who Are We</h2>
					<p className="md:text-lg mb-5 text-justify lg:text-left">SELC is one of the largest data analytics centres in Europe. It seeks to derive value from Big Data and provides innovative technology solutions for industry and society by enabling better decision-making.</p>
					<p className="md:text-lg mb-5 text-justify lg:text-left">We support 450 researchers across areas such as the Fundamentals of Data Science, Sensing and Actuation, Scaling Algorithms, Model Building, Multi Modal Analysis, Data Engineering and Governance, Decision Making and Trustworthy AI.</p>
					<p className="md:text-lg text-justify lg:text-left">Their research can be applied across four broad areas:</p>
					<ul className="list-disc ml-8">
						<li className="text-base my-2">Augmented Human</li>
						<li className="text-base my-2">Smart Enterprise</li>
						<li className="text-base my-2">Smart Communities</li>
						<li className="text-base mt-2">Sustainability</li>
					</ul>
				</div>
				<div id="governance" className="w-full py-20">
					<h2 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mb-10 relative lg:before:w-[12%] before:w-[30%] before:absolute before:h-1 before:bg-primary-500 before:-bottom-1 before:left-0">Governance</h2>
					<Swiper
						spaceBetween={30}
						breakpoints={{
							576: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 3,
							},
							1024: {
								slidesPerView: 5,
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
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
