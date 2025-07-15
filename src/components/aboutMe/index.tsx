import styles from "./index.module.css";

export default function AboutMe() {
	return (
		<section className={styles.aboutMe} id="aboutMe">
			<div className={styles.info}>
				<h1>Olá! Eu sou o devlover Vitor!</h1>
				<p>
					Eu sou um programador Web que ama estar constantemente aprendendo
					novas tecnologias! Atualmente estou aprimorando minhas habilidades em
					ReactJS e NodeJS, mas eu também sei produzir ótimos projetos em Java /
					SpringBoot! Sou apaixonado por tecnologia, e meu maior sonho é um dia
					aprender de tudo, pelo menos um pouco.
				</p>
			</div>
			<img src="me.png" alt="A photo of me" />
		</section>
	);
}
