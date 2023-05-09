import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ListPropertys from "../components/ListPropertys";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />
      <ListPropertys />
      <Newsletter />
      <Contact />

      <Footer />
    </main>
  )
}