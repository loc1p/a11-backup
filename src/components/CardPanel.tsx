'use client'
import Card from "./Card";
import {useReducer} from "react";
import Link from "next/link";
export default function CardPanel(){
    const compareReducer= (ratingList: Map<string,number>,action:{type: string, venueName: string,rating:number})=>{
        switch(action.type){
            case 'changed' : {
                const newList = new Map(ratingList)
                newList.set(action.venueName,action.rating)
                return newList
            }
            case "removed": {
                const newList = new Map(ratingList);
                newList.delete(action.venueName);
                return newList;
    }
            default: return ratingList
        }
    }
    const initialRatings = new Map<string, number>([
        ["The Bloom Pavilion", 0],
  ["Spark Space", 0],
  ["The Grand Table", 0],
    ]);

    const mockVenueRepo = [
        {vid:"001",name:"The Bloom Pavilion",image:"/img/bloom.jpg"},
        {vid:"002",name:"Spark Space",image:"/img/sparkspace.jpg"},
        {vid:"003",name:"The Grand Table",image:"/img/grandtable.jpg"}
    ]

    const [ratingList, dispatchCompare] = useReducer(compareReducer, initialRatings);
    return(
        <div>
        <div style={{margin:"20px", display:"flex",flexDirection:"row",
                flexWrap:"wrap",justifyContent:"space-around"}}>

                    {
                        mockVenueRepo.map((venueItem)=>(<Link href={`/venue/${venueItem.vid}`} key={venueItem.vid}><Card venueName={venueItem.name} imgSrc={venueItem.image} 
                            onCompare={(venueName:string,rating:number)=>dispatchCompare({type:'changed',venueName:venueName, rating:rating})} /></Link>))

                    }
                {/* <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" onCompare={(venueName:string,rating:number)=>dispatchCompare({type:'changed',venueName:venueName, rating:rating})} />
                <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"  onCompare={(venueName:string,rating:number)=>dispatchCompare({type:'changed',venueName:venueName, rating:rating})}/>
                <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"  onCompare={(venueName:string,rating:number)=>dispatchCompare({type:'changed',venueName:venueName, rating:rating})}/> */}
                </div>
                <div className="w-full text-xl font-bold px-[20px]">Venue List with Ratings: {ratingList.size}</div>
                { Array.from(ratingList.entries()).map ( ([venueName,rating])=><div data-testid={venueName} className="px-[20px] pt-[10px]" onClick={()=>dispatchCompare({type:'removed',venueName,rating})} key={venueName}>{venueName} : {rating}</div> )}
                </div>
        )
}