import styles from "./index.module.css";

export default function Experiences() {
	return (
		<section className={styles.experiences} id="experience">
			<h1>Minhas experiências</h1>
			<div className={styles.experience}>
				<header>
					<h2>Trainee - Cloud Técnico-Comercial</h2>

					<p className={styles.date}>
						<span className={styles.separator}>|</span>07/2024 - Moment
					</p>
				</header>
				<div className={styles.main}>
					<p className={styles.desc}>
						Eu sou um programador Web que ama estar constantemente aprendendo
						novas tecnologias! Atualmente estou aprimorando minhas habilidades
						em ReactJS e NodeJS, mas eu também sei produzir ótimos projetos em
						Java / SpringBoot! Sou apaixonado por tecnologia, e meu maior sonho
						é um dia aprender de tudo, pelo menos um pouco.
					</p>
					<div className={styles.threeDots}>
						<p>●</p>
						<p>●</p>
						<p>●</p>
					</div>
				</div>
			</div>
			<div className={styles.experience}>
				<header>
					<h2>Freelancer - Desenvolvedor</h2>
					<p className={styles.date}>
						<p className={styles.separator}>|</p>07/2024 - Moment
					</p>
				</header>
				<div className={styles.main}>
					<p className={styles.desc}>
						Eu sou um programador Web que ama estar constantemente aprendendo
						novas tecnologias! Atualmente estou aprimorando minhas habilidades
						em ReactJS e NodeJS, mas eu também sei produzir ótimos projetos em
						Java / SpringBoot! Sou apaixonado por tecnologia, e meu maior sonho
						é um dia aprender de tudo, pelo menos um pouco.
					</p>
					<div className={styles.threeDots}>
						<p>●</p>
						<p>●</p>
						<p>●</p>
					</div>
				</div>
			</div>
		</section>
	);
}
