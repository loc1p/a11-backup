import Card from "./Card"
import Link from 'next/link'
export default async function VenueCatalog({venuesJson}:{venuesJson:Promise<any>}){
    const venueJsonReady = await venuesJson
    return(
        <>
         <div>
        <div style={{margin:"20px", display:"flex",flexDirection:"row",
                flexWrap:"wrap",justifyContent:"space-around"}}>

                    {
                        venueJsonReady.data.map((venueItem:any)=>(<Link href={`/venue/${venueItem._id}`} key={venueItem._id}><Card venueName={venueItem.name} imgSrc={venueItem.picture} 
                            /></Link>))

                    }
                {/* <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" onCompare={(venueName:string,rating:number)=>dispatchCompare({type:'changed',venueName:venueName, rating:rating})} />
                <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"  onCompare={(venueName:string,rating:number)=>dispatchCompare({type:'changed',venueName:venueName, rating:rating})}/>
                <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"  onCompare={(venueName:string,rating:number)=>dispatchCompare({type:'changed',venueName:venueName, rating:rating})}/> */}
                </div>
                {/* <div className="w-full text-xl font-bold px-[20px]">Venue List with Ratings: {ratingList.size}</div>
                { Array.from(ratingList.entries()).map ( ([venueName,rating])=><div data-testid={venueName} className="px-[20px] pt-[10px]" onClick={()=>dispatchCompare({type:'removed',venueName,rating})} key={venueName}>{venueName} : {rating}</div> )} */}
                </div>

        </>

    )
}