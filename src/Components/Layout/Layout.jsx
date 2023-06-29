import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { styles } from "./Layout.module.css";

export default function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/Experience">Experience</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/jacob-m-roberts/"
								)
							}>
							<FaLinkedin
								style={{
									color: "0E76A8",
									fontSize: "30px",
									margin: "0",
								}}
							/>
						</Link>
						<Link
							onClick={() =>
								window.open("https://github.com/Jacob0421")
							}>
							<FaGithub
								style={{
									fontSize: "30px",
									margin: "0",
								}}
							/>
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}
