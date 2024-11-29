"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ThreeThree } from '../data/Data';


const SinglePost = () => {
    const [item, setItem] = useState();
    const params = useParams();
    const data = params.slug
    const datastring = data.toString()
    
    const GetItem = () =>{
    const result = ThreeThree.find(({id}) => id === datastring);
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
