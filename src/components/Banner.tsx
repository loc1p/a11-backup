'use client'
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

import Image from 'next/image';
import styles from "./banner.module.css"
export default function Banner(){
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg'];
    const [index,setIndex] = useState(0);
    const router = useRouter();
    const {data:session} = useSession()

    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1);}} >
            <Image src={covers[index%4]}
            alt = 'cover'
            fill = {true}
            objectFit = 'cover'
            priority
            />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-bold font-serif'>Your Travel Partner</h1>
                <h3 className='text-xl font-sans'>explore Your World with Us</h3>
            </div>
            <button className="bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-5
            hover:bg-cyan-600 hover:text-white hover:border-trasparent
            "
            onClick={(e)=>{e.stopPropagation(); router.push('/venue')}}
            >
                Select Venue
            </button>
            {
                session? <div className="absolute z-30 top-5 right-10 font-semibold text-cyan-100 text-xl">Welcome {session.user?.name}</div>:<div></div>
            }
        </div>
    )
}
