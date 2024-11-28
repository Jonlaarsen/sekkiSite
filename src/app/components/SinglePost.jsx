"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const inventory = [
        {id: "1" , src:'/ConversexPop.mp4',title:"Converse X Pop", subtitle:"commercial", alt: "tommy" },
        {id: "2" , src:'/MakersMark2.mp4' ,title:"Makers Mark", subtitle:"commercial", alt:"makers mark event video"},
        {id: "3" , src:'/SavourPuma.mp4',title:"Savour x puma", subtitle:"commercial", alt:"savour x puma video"},
        ]

const SinglePost = () => {
    const [item, setItem] = useState();
    const params = useParams();
    const data = params.slug
    
    const GetItem = () =>{
    const result = inventory.find(({id}) => id === data);
    console.log(result);
    setItem(result)
    console.log(item)
    }

    useEffect(() => {
       GetItem()
    }, []);



  if (!item) return null    
    
  return (
    <div>
      <div>
        <div className='flex flex-col fixed top-5 left-5'>
            <h1 className='text-5xl'>{item.title}</h1>
            <h2 className='pl-3'>{item.subtitle}</h2>
        </div>
        <div>
            <iframe src={item.src} autoPlay className='w-screen h-[48rem]'></iframe>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
