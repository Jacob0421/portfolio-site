import React from "react";
import styles from "./Resume.module.css";

export default function Resume() {
	return (
		<div className={styles.resumeContainer}>
			<p style={{ color: "red" }}>
				maybe put a popup that states this is made throug hhtml and the
				resume is available for download in the top righ
			</p>
			<h1 className={styles.name}>Jacob Roberts</h1>
			<section className={styles.contactInfo}>
				<p>P: 904-707-4030</p>
				<p>E: Jacob_Rob99@Outlook.com</p>
				<p>LinkedIn: /in/jacob-m-roberts</p>
				<p>Github: /Jacob0421</p>
			</section>
			<section>
				<h1 className={styles.sectionHeader}>Summary</h1>
				<div className={styles.divider}></div>
				<p>
					A Solution-Oriented and collaborative developer with
					experience developing web applications as well as
					maintaining client-facing applications and managing client
					expectations. Seeking to leverage proven skills in
					communication and adaptability.
				</p>
			</section>
			<section>
				<h1 className={styles.sectionHeader}>Experience</h1>
				<div className={styles.divider}></div>
				<div>
					<div className={styles.positionDetails}>
						<p>
							Fidelity National Information Services, Inc. |
							Jacksonville, FL
						</p>
						<p>June 2021 - Present</p>
					</div>
					<strong>Product Support Representative 1</strong>
					<ul>
						<li>Bullet 1</li>
						<li>Bullet 2</li>
						<li>Bullet 3</li>
						<li>Bullet 4</li>
						<li>Bullet 5</li>
					</ul>
				</div>
				<div>
					<div className={styles.positionDetails}>
						<p>
							Fidelity National Information Services, Inc. |
							Jacksonville, FL
						</p>
						<p>June 2018 - June 2021</p>
					</div>
					<strong>Risk Analyst Intern</strong>
				</div>
				<br />
				<div>
					<div className={styles.positionDetails}>
						<p>Publix Supermarkets Inc. | Jacksonville, FL</p>
						<p>April 2016 - June 2018</p>
					</div>
					<strong>Deli Clerk</strong>
				</div>
			</section>
			<section>
				<h1 className={styles.sectionHeader}>Projects</h1>
				<div className={styles.divider}></div>
				<div>
					<strong>Wishlist App / API</strong>
					<ul>
						<li>
							Wishlist app where users login and are verified,
							then can navigate to other sites, Add Items to a
							wishlist, and then share that wishlist with others
						</li>
						<li>
							Worked in React to build reusable frontend
							components and dynamic webpages
						</li>
						<li>
							Implemented and called an API to interface with
							MongoDB and return results to populate the site
						</li>
						<li>
							Used token based authentication to verify and track
							the user sessions
						</li>
						<li>Bullet 5</li>
					</ul>
				</div>
				<div>
					<strong>Senior Project 1 / 2</strong>
					<ul>
						<li>
							Used Azure to host the website, and Azure blob to
							store various file types, and Azure DB to store
							information pertaining to the app.
						</li>
						<li>
							Implemented an ASP.net Core MVC pattern using C# to
							populate any data needed as well as create dynamic
							web pages to interface between the front and backend
							of the site.
						</li>
						<li>
							Worked with client over the course of two semesters
							to iteratively work to gain an understading of the
							expectations and needs, implement a solution, and
							revise until client satisfaction was reached
						</li>
						<li>
							Helped record changes made, client needs, and
							project progress in JIRA
						</li>
						<li>
							Used AJAX and JSON results to make parts of pages
							more responsive
						</li>
						<li>
							Implemented a mobile friendly and responsive site
						</li>
					</ul>
				</div>
				<div>
					<strong>Decisions</strong>
					<ul>
						<li>
							Idle game created with React for the Portland Indie
							Squads Summer Slow Jam 2023
						</li>
						<li>
							Practice app to help learn interactions between some
							components as well as React Hooks such as useState
							and useEffect
						</li>
						<li>Hosted website site using Netlify</li>
						<li>
							Used a combination of ESLint and Prettier to ensure
							code was uniform and readable through out, while
							still being functional and to the point
						</li>
					</ul>
				</div>
			</section>
			<section>
				<h1 className={styles.sectionHeader}>Education</h1>
				<div className={styles.divider}></div>
				<div className={styles.degreeDetails}>
					<p>University of North Florida</p>
					<p>May 2021</p>
				</div>
				<p>
					Bachelor of Information Systems (Minor in Business
					Administration)
				</p>
			</section>
		</div>
	);
}
