import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./Layout.module.css";

export default function Layout() {
	const emailAddress = "mailto:Jacob_Rob99@Outlook.com";
	const linkedInURL = "https://www.linkedin.com/in/jacob-m-roberts/";
	const githubURL = "https://github.com/Jacob0421";

	return (
		<>
			<nav>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link to="/" className={styles.navLink}>
							Home
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link to="/Projects" className={styles.navLink}>
							Projects
						</Link>
					</li>
				</ul>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link
							onClick={() => window.open(emailAddress)}
							title={emailAddress}>
							<AiOutlineMail className={`${styles.navIcon}`} />
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link
							onClick={() => window.open(linkedInURL)}
							title={linkedInURL}
							className={`${styles.navIcon}`}>
							<FaLinkedin
								style={{
									color: "0E76A8",
								}}
							/>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link
							onClick={() => window.open(githubURL)}
							title={githubURL}>
							<FaGithub className={`${styles.navIcon}`} />
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}
