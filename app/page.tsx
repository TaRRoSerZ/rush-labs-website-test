"use client";

import { relative } from "path";
import { useState } from "react";

export default function Home() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<header>
				<a href="#">
					<img
						src="/logo-black-background.svg"
						alt="logo rush labs"
						id="header-logo"
					/>
				</a>

				<nav>
					<img
						src={open ? "/close-cross.png" : "burger-menu.png"}
						alt="menu déroulant pour mobile"
						id={open ? "burger-menu-btn-open" : "burger-menu-btn"}
						onClick={() => setOpen(!open)}
					/>
					<ul className={open ? "menu1 active" : "menu1"}>
						<li>
							<a href="#">Our services</a>
						</li>
						<li>
							<a href="#">Case studies</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
					<ul className="menu2">
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Cases</a>
						</li>
						<div className="main-cta-btn nav" id="nav-cta-btn">
							<a href="https://calendly.com/antonio-rush/30min">Contact us</a>
						</div>
					</ul>
				</nav>
			</header>
			<main className="bg-tiles">
				<div className="main-title-container">
					<h1>Rush Labs</h1>
					<h2>A team of experts from frontend to backend</h2>
				</div>
				<div className="main-cta-btn">
					<a href="https://calendly.com/antonio-rush/30min">Book a meeting</a>
				</div>
			</main>
			<section className="logos bg-tiles">
				<div className="logos-grid">
					<div className="logo-card">
						<img src="/logos/easy_mile_logo.avif" alt="EasyMile" />
					</div>
					<div className="logo-card">
						<img src="/logos/zorgi_logo.svg" alt="Zorgi" />
					</div>
					<div className="logo-card">
						<img src="/logos/dieteren_logo.avif" alt="Dieteren" />
					</div>
					<div className="logo-card">
						<img src="/logos/maserati_logo.avif" alt="Maserati" />
					</div>
					<div className="logo-card">
						<img src="/logos/porsche_logo.svg" alt="Porsche" />
					</div>
					<div className="logo-card">
						<img src="/logos/o25_logo.avif" alt="O25" />
					</div>
					<div className="logo-card">
						<img src="/logos/mobvious_logo.svg" alt="Mobvious" />
					</div>
					<div className="logo-card">
						<img src="/logos/lab_box_logo.svg" alt="Lab Box" />
					</div>
					<div className="logo-card">
						<img src="/logos/cupra_logo.avif" alt="Cupra" />
					</div>
					<div className="logo-card">
						<img src="/logos/ariane_logo.svg" alt="Ariane" />
					</div>
					<div className="logo-card">
						<img src="/logos/taxis_verts_logo.svg" alt="Taxis Verts" />
					</div>
					<div className="logo-card">
						<img src="/logos/mypop_logo.svg" alt="My Pop" />
					</div>
				</div>
			</section>
			<section className="info-section">
				<div className="purple-blur first"></div>
				<div className="purple-blur second"></div>
				<div className="purple-blur third"></div>
				<div className="info-section-title-container">
					<h3>What sets us apart</h3>
					<h4>
						We build enterprise-grade solutions with the agility of a startup,
						combining technical excellence with speed of delivery.
					</h4>
				</div>
				<div className="cards-container">
					<div className="card">
						<h4>🚀 Accelerated Time-to-Market</h4>
						<p>
							From concept to production in weeks, not months. Our rapid
							delivery approach keeps you ahead of market demands.
						</p>
					</div>
					<div className="card">
						<h4>🧩 Seamless Integration</h4>
						<p>
							Your new solutions working flawlessly with existing systems. We
							handle complex enterprise integrations while maintaining security
							and performance.
						</p>
					</div>
					<div className="card">
						<h4>🏛️ Proven Enterprise Partner</h4>
						<p>
							Trusted by leading Belgian companies for mission-critical
							solutions. We understand what it takes to deliver at enterprise
							scale.
						</p>
					</div>
				</div>
			</section>
			<section className="comment-section">
				<div className="div-comment">
					<div className="star-container">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							className="star"
						>
							<path
								fillRule="evenodd"
								d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
								clipRule="evenodd"
							></path>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							className="star"
						>
							<path
								fillRule="evenodd"
								d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
								clipRule="evenodd"
							></path>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							className="star"
						>
							<path
								fillRule="evenodd"
								d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
								clipRule="evenodd"
							></path>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							className="star"
						>
							<path
								fillRule="evenodd"
								d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
								clipRule="evenodd"
							></path>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							className="star"
						>
							<path
								fillRule="evenodd"
								d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<div className="comment">
						<p>
							"They are very reactive and make sure to share their point of view
							in order to improve the project in a very collaborative mindset.
							They know the business and understand it in order to be a partner
							in the development of the plateform."
						</p>

						<p className="comment-author">Auriane Gillet</p>
						<p className="comment-author-job">CEO of MyPop</p>
					</div>
				</div>
			</section>
			<section className="case-studies-section">
				<h2>Case studies</h2>
				<div className="case-cards-container">
					<div className="case-card">
						<div className="header-case-card">
							<img src="/logos/mypop_logo.svg" alt="logo MyPop" />
							<figcaption>Fullstack</figcaption>
						</div>
						<div className="case-card-core">
							<p className="year">2024</p>
							<h3>
								MyPop: A Modern, Automated, Self-Service Car Rental Platform for
								Flexible Mobility
							</h3>
							<p className="case-content">
								We collaborated with MyPop, a Belgian car rental service focused
								on flexible, long-term rentals, to develop a cutting-edge web
								platform that redefines the car rental experience. This solution
								empowers users with self-service subscriptions, integrates
								seamlessly with car delivery APIs, and provides real-time
								vehicle tracking through sensor data. Built with a custom
								vanilla Node.js and TypeScript backend and a Next.js frontend
								powered by Prismic, the platform also introduces an innovative
								OCR and AI-driven fine management system. An admin back office
								equips MyPop’s team with robust tools to oversee subscriptions,
								fleet management, and operations.
							</p>
						</div>
					</div>
					<div className="case-card">
						<div className="header-case-card">
							<img
								src="/logos/taxis_verts_logo.svg"
								alt="logo Taxis Verts"
								id="taxi-verts"
							/>
							<figcaption>Mobile</figcaption>
						</div>
						<div className="case-card-core">
							<p className="year">2023</p>
							<h3>
								Collecto App Revamp: A Modern Shared Taxi Solution in Just Two
								Weeks
							</h3>
							<p className="case-content">
								We teamed up with Taxi Verts and the Brussels government to
								rebuild the Collecto app from the ground up, delivering a
								modernized shared taxi service for Brussels residents. In an
								ambitious two-week timeline, we transformed the app with a fresh
								design, in-app payments, and enhanced functionality, elevating
								its App Store rating from 2 stars to 4.6 stars.
							</p>
						</div>
					</div>
					<div className="case-card" id="last">
						<div className="header-case-card">
							<img src="/logos/mypop_logo.svg" alt="logo My Pop" />
							<figcaption>AI</figcaption>
						</div>
						<div className="case-card-core">
							<p className="year">2021</p>
							<h3>Vehicle Fine Processing Automation</h3>
							<p className="case-content">
								Developed an automated fine-processing system that transforms
								time-consuming manual work into an instant process. Using Google
								Vision and OpenAI, the solution automatically extracts key data
								(license plates, dates, amounts) from PDF fines and matches them
								with the correct vehicle renters, enabling immediate fine
								forwarding while maintaining high accuracy.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="booking-section">
				<div className="booking-section-container">
					<h2>Let's work together.</h2>
					<p>
						Your enterprise needs high-quality digital solutions, delivered at
						speed. Let's discuss turning your next big project into
						production-ready reality faster than you thought possible..
					</p>
					<div className="main-cta-btn" id="bottom-cta">
						<a href="#contact">Get in touch - 24h response</a>
					</div>
				</div>
			</section>
			<div className="separator"></div>
			<div className="bottom-nav">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#cases">Our work</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/rush-labs-be/">
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
			<footer>
				<img src="/logo-black-background.svg" alt="logo rush labs" />
				<p>© 2025 Rush Labs</p>
			</footer>
		</>
	);
}
