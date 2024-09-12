import Navbar from "./navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "./footer";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>anbtech.xyz</title>
        <meta name="description" content="Aren's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        // <About />
        <Skills />
        // <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
