import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Experience</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}
