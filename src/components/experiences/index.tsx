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
						Atuando como trainee nas áreas de Suporte, Pré-vendas, e atualmente, trainee de especialists. Ao longo deste período de muito aprendizado, tive a oportunidade de adquirir as certificações MS-900, AZ-900 e SC-900, e atualmente estudando para as certificações AI-900 e AZ-104! Também fui responsável por resolver problemas de forma eficiente dentro da área de suporte e prestar auxilio aos vendedores na área de pré-vendas, além da oportunidade de aprender novas tecnologis, como Kaspersky e Acronis!
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
						Atualmente além de meu cargo como trainee técnico-comercial dentro da SND, também atuo nas horas vagas como freelnancer em desenvolvimento de sistemas para explorar esta minha paixão por códigos! Sempre gostei de programação desde o 7º do meu ensino fundamental, onde tive a oportunidade de realizar um curso sobre HTML / CSS / JavaScript, e foi ai que descobri que programação era o que eu queria para a minha vida.
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
