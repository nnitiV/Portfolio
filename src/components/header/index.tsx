import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export default function Header() {
	const [isSticky, setIsSticky] = useState<boolean>(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (headerRef.current) {
				const stickyPoint = headerRef.current;
				setIsSticky(window.pageYOffset > stickyPoint);
			}
		};

		// Add event listener when component mounts
		window.addEventListener("scroll", handleScroll);

		// Clean up event listener when component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleSmoothScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const offset =
				id == "skills"
					? window.innerWidth <= 1024
						? 550
						: window.innerWidth <= 1400
							? 650
							: 750
					: -120;
			const targetPosition =
				element.getBoundingClientRect().top + window.scrollY;

			window.scrollTo({
				top: targetPosition + offset,
				behavior: "smooth",
			});

			// Close mobile menu after navigation
			// setIsMenuOpen(false);
		}
	};
	return (
		<header className={`${styles.header}`}>
			<nav
				ref={headerRef}
				className={`${styles.menu} ${styles.fullWidthMenu} ${isSticky && styles.sticky
					}`}
			>
				<h1>VAEC</h1>
				<ul>
					<a
						href="#aboutMe"
						onClick={(e) => {
							e.preventDefault();
							handleSmoothScroll("aboutMe");
						}}
					>
						<li>Sobre mim</li>
					</a>
					<a
						href="#skills"
						onClick={(e) => {
							e.preventDefault();
							handleSmoothScroll("skills");
						}}
					>
						<li>Habilidades</li>
					</a>
					<a
						href="#projects"
						onClick={(e) => {
							e.preventDefault();
							handleSmoothScroll("projects");
						}}
					>
						<li>Projetos</li>
					</a>
					<a
						href="#experience"
						onClick={(e) => {
							e.preventDefault();
							handleSmoothScroll("experience");
						}}
					>
						<li>Experiência</li>
					</a>
				</ul>
				<img src="light_mode.svg" alt="Light Mode Icon" />
			</nav>
			<div className={styles.sideBarMenu}>
				<nav className={`${styles.menu}  ${isSticky && styles.sticky}`}>
					<h1>VAEC</h1>
					<i
						className="fa-solid fa-bars"
						onClick={() => setIsVisible(true)}
					></i>
				</nav>
				<div
					className={`${isVisible && styles.active} ${styles.wrapperSideBarMenu
						}`}
				>
					<nav className={`${styles.sideMenu}`}>
						<i
							className="fa-solid fa-close"
							onClick={() => setIsVisible(false)}
						></i>
						<ul>
							<a
								href="#aboutMe"
								onClick={(e) => {
									e.preventDefault();
									handleSmoothScroll("aboutMe");
									setIsVisible(false);
								}}
							>
								<li>Sobre mim</li>
							</a>
							<a
								href="#skills"
								onClick={(e) => {
									e.preventDefault();
									handleSmoothScroll("skills");
									setIsVisible(false);
								}}
							>
								<li>Habilidades</li>
							</a>
							<a
								href="#projects"
								onClick={(e) => {
									e.preventDefault();
									handleSmoothScroll("projects");
									setIsVisible(false);
								}}
							>
								<li>Projetos</li>
							</a>
							<a
								href="#experience"
								onClick={(e) => {
									e.preventDefault();
									handleSmoothScroll("experience");
									setIsVisible(false);
								}}
							>
								<li>Experiência</li>
							</a>
						</ul>
						<img src="light_mode.svg" alt="Light Mode Icon" />
					</nav>
				</div>
			</div>
		</header>
	);
}
