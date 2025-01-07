import Hero from "./components/Hero";
import ThreebyThree from "./components/ThreebyThree";
import Categories from "./components/Categories";
import { fetchHero, fetchUploads } from './lib/Fetch';




export default async function Home() {
  const heroVideos = await fetchHero(); // Fetch uploads data from the database

  return (
    <div>
      
      <Hero/>
      <ThreebyThree heroVideos={heroVideos} />
      <Categories/>
      
      
    </div>
  );
}
