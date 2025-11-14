import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import EmploymentHistory from "@/components/employmentHistory";
import AcademicDegree from "@/components/academicDegree";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Skills from "@/components/skills";

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
