import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/projects";
import EmploymentHistory from "@/components/layout/EmploymentHistory";
import AcademicDegree from "@/components/layout/AcademicDegree";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/layout/Contact";
import Skills from "@/components/layout/Skills";

import { Main } from "./styles";

function App() {
  return (
    <Main>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <EmploymentHistory />
      <AcademicDegree />
      <Contact />
      <Footer />
    </Main>
  );
}

export default App;
