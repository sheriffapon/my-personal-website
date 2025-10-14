
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sheriffapon | Full-Stack Developer</title>
        <meta name="description" content="Personal portfolio of Sheriffapon, a full-stack developer specializing in React, Node, and modern web technologies." />
        <meta property="og:title" content="Sheriffapon | Full-Stack Developer" />
        <meta property="og:description" content="Hi — I’m Sheriffapon. I build fast, scalable web apps." />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
