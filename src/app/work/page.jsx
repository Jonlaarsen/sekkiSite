import React from 'react'
import Work from '../components/Work'
import { fetchHero, fetchUploads } from '../lib/Fetch'

// Enable revalidation for this page
export const revalidate = 0;

export default async function page() {
  const videos = await fetchUploads();
  const heroVideos =  await fetchHero();
  console.log(heroVideos)

  return (
    <>
    <Work videos={videos}  heroVideos={heroVideos}/>
    </>
  )
}


