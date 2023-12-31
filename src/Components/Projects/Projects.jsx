import React from "react";
import { projects } from "../../Data/Projects";
import styles from "./Projects.module.css";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
	return (
		<div className="content-container">
			<section className={styles.projectContainer} id="projects">
				{projects.map((project, index) => (
					<div className={styles.card}>
						<div className={styles.cardHeader}>
							<div className={styles.cardTitle}>
								<h1>{project.ProjectName}</h1>
							</div>
							<div className={styles.cardDates}>
								{`${project.ProjectStartDate} -
							${project.ProjectEndDate}`}
							</div>
						</div>
						<div className={styles.projectLinks}>
							{project.GitHubURL !== "" ? (
								<p
									title={project.GitHubURL}
									className={styles.link}
									onClick={() =>
										window.open(project.GitHubURL)
									}>
									View GitHub Repository <FiExternalLink />
								</p>
							) : (
								""
							)}
							{project.HostedURL !== "" ? (
								<p
									title={project.HostedURL}
									className={styles.link}
									onClick={() =>
										window.open(project.HostedURL)
									}>
									View Hosted Site <FiExternalLink />
								</p>
							) : (
								""
							)}
						</div>
						<div className={styles.cardDescription}>
							<strong>Description:</strong> <br />
							{project.ProjectDescription}
						</div>
						<div className={styles.tagContainer}>
							<p>languages used:</p>
							<div className={styles.tags}>
								{project.LanguagesUsed.map(
									(language, index) => (
										<p
											className={`${styles.tag} ${styles.language}`}
											key={index}>
											{language}
										</p>
									)
								)}
							</div>
							<p>Tech used:</p>
							<div className={styles.tags}>
								{project.TechnologiesUsed.map(
									(technology, index) => (
										<p
											className={`${styles.tag} ${styles.technology}`}
											key={index}>
											{technology}
										</p>
									)
								)}
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
