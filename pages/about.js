import React from 'react'
import Footer from '../components/Footer/Footer'
import styles from '../styles/About.module.css'
import axios from "../api/axios-strapi";
import { SERVER_URL } from "../api/urls";

export default function AboutPage({about, worker}) {
	console.log(about);
	return (
		<>
			<div className={styles.about}>
				<div className={styles.container}>
					<div className="title-block">
						<h1 className={styles.title}>О нас</h1>
					</div>
					<div>
						<h1>{about.title}</h1>
						<p>{about.desc}</p>
					</div>
					<div>
						<h1 className={styles.workers_title}>Наши работники</h1>
					</div>
					<ul className={styles.list}>
						{worker.map((worker) => {
							return(
								<li key={worker.id} className={styles.list_item}>
									<div className={styles.worker_image}>
										<img className={styles.worker_img} src={ SERVER_URL + worker.workerImg?.formats?.large?.url} alt="" />
									</div>
									<div>
										<h2 className={styles.worker_name}>{worker.workerName}</h2>
										<p className={styles.worker_desc}>{worker.workerDesc}</p>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<Footer/>
		</>
	)
}
export async function loadAboutUs() {
  const aboutUs = await axios.get(`/about-uses`);
  const aboutUsData = aboutUs.data.data;

  return aboutUsData;
}
export async function loadWorkers() {
  const workers = await axios.get(`/workers?populate=workerImg`);
  const workersData = workers.data.data;

  return workersData;
}

export async function getStaticProps() {
  const about = await loadAboutUs();
  const worker = await loadWorkers();
  return { props: { about, worker } };
}
