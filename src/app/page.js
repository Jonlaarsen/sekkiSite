import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreebyThree from "./components/ThreebyThree";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      
      <Hero/>
      <div className="hidden md:block">
      <ThreebyThree/>
      </div>
      <Categories/>
      
      
    </div>
  );
}
