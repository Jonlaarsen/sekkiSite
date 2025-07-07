import Hero from "./components/Hero";
import ThreebyThree from "./components/ThreebyThree";
import Categories from "./components/Categories";
import { fetchHero, fetchUploads } from './lib/Fetch';

// Enable revalidation for this page
export const revalidate = 0;

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
