'use client'
import {useState ,useReducer} from "react";
import Image from 'next/image';
import InteractiveCard from "./InteractiveCard";
import { Rating } from '@mui/material';
export default function Card({venueName,imgSrc,onCompare}:{venueName:string,imgSrc:string,onCompare?:Function}){
    const [rating,setRating] = useState(0);
    return (
        <InteractiveCard>
            <div className="relative w-full h-[70%]">
            <Image src={imgSrc}
            alt='Venue Picture'
            fill={true}
            className="object-cover rounded-[7px]"
            />
            </div>
            <div className="h-[10%] p-[10px]">
                <h3 className="text-[cadetblue] font-bold">{venueName}</h3>
            </div>
            <div className="h-[20%] px-[10px] py-[15px]">
                { onCompare? <Rating
        name={venueName+" Rating"}
        id={venueName}
        data-testid={venueName+" Rating"}
        value={rating}
        onChange={(event, value) => {
        const newValue = value ?? 0;
          setRating(newValue); event.stopPropagation(); onCompare(venueName,newValue);
        }}
        onClick={(e)=>{
            e.stopPropagation();
        }}
      /> : '' }
            </div>
        </InteractiveCard>
    )
}
