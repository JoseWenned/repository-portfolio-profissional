import About from "@/components/About/About";
import Formacao from "@/components/Formacao/Formacao";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projetos from "@/components/Projetos/Projetos";
import Skills from "@/components/Skills/Skills";

export default function Home() {  
  return (
    <>
    <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projetos />
        <Formacao />
      </main>
    </>
  );
}
