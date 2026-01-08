import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};
export default IndexPage;
