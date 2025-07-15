import AboutMe from "./components/aboutMe";
import Experiences from "./components/experiences";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import "./global.css";

function App() {
	return (
		<>
			<section className="about-section">
				<Header />
				<AboutMe />
			</section>
			<Skills />
			<Projects />
			<Experiences />
			<Footer />
		</>
	);
}

export default App;
