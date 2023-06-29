import React from "react";
import "@splidejs/react-splide/css";
import { projects } from "../../Data/Projects";
import styles from "./Projects.module.css";

export default function Projects() {
	return (
		<section className={styles.projectContainer} id="projects">
			{projects.map((project, index) => (
				<div className={styles.card}>
					<div className={styles.cardHeader}>
						<div className={styles.cardTitle}>
							{project.ProjectName}
						</div>
						<div className={styles.cardDates}>
							{project.ProjectStartDate} -{" "}
							{project.ProjectEndDate}
						</div>
					</div>
					<div className={styles.cardDescription}>
						{project.ProjectDescription}
					</div>
					<div className={styles.tagContainer}>
						<div className={styles.tags}>
							{project.LanguagesUsed.map((language, index) => (
								<p
									className={`${styles.tag} ${styles.language}`}
									key={index}>
									{language}
								</p>
							))}
						</div>
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
	);
}
