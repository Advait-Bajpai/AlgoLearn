import React from "react";
import Navbar from "./Navbar";
import home_img from "./Home.png";
import './effects.css';
import { motion } from "framer-motion";
import Cards from "./Cards";


const Home = () => {
	const scrollDown = () => {
		const section = document.getElementById("cards-section");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	const text =
		"Visualize algorithms in a simple and fun way."; // shorter sentence

	const letters = text.split("");

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.06, // increase this for slower typing (0.08, 0.1, etc.)
			},
		},

	};

	const letterVariants = {
		hidden: { opacity: 0, y: 5 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<>
			<Navbar />
			<div className="home-container">
				<div className="container_content">
					<div className="container_content_inner">
						<div className="title">
							<motion.h1
								className="title-h1"
								style={{ fontFamily: "Tourmaline" }}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<span style={{ color: "#25b79f" }}>Algorithm</span> Visualizer
							</motion.h1>
						</div>

						<div className="par">
							<motion.p
								className="paragraph"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{letters.map((char, index) => (
									<motion.span
										key={index}
										variants={letterVariants}
										style={{ display: "inline-block" }}
									>
										{char === " " ? "\u00A0" : char}
									</motion.span>
								))}
							</motion.p>
						</div>

						<div className="btns">
							<motion.button
								className="btns_more"
								onClick={scrollDown}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
							>
								See more
							</motion.button>
						</div>
					</div>
				</div>

				<div className="container_outer_img">
					<div className="img-inner">
						<img src={home_img} alt="" className="container_img" />
					</div>
				</div>
			</div>

			<div className="overlay"></div>
			<Cards/>
		</>
	);
};

export default Home;
