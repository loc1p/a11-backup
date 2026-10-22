import Image from "next/image";
import getVenue from "@/libs/getVenue"
export default async function VenueDetailPage({params}:{params:Promise<{vid:string}>}){
     const {vid} = await params;
     const venueDetail = await getVenue(vid);
    /**
     * Mock Data for Demonstration Only
     */
    // const mockCarRepo = new Map()
    // mockCarRepo.set( "001",{name:"The Bloom Pavilion",image:"/img/bloom.jpg"})
    // mockCarRepo.set("002",{name:"Spark Space",image:"/img/sparkspace.jpg"})
    // mockCarRepo.set("003",{name:"The Grand Table",image:"/img/grandtable.jpg"})
    return(
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image className="rounded-lg w-[30%]"src={venueDetail.data.picture} alt={venueDetail.data.name} 
                width={0} height={0} sizes="100vw"/>
                <div className="text-md mx-5">
                    <div className="text-md mx-5">
                    Name : {venueDetail.data.name}
                </div>
                <div className="text-md mx-5">
                    Address : {venueDetail.data.address}
                </div>
                <div className="text-md mx-5">
                    District : {venueDetail.data.district}
                </div>
                <div className="text-md mx-5">
                    Postal Code : {venueDetail.data.postalcode}
                </div>
                <div className="text-md mx-5">
                    Tel : {venueDetail.data.tel}
                </div>
                <div className="text-md mx-5">
                    Daily Rate : {venueDetail.data.dailyrate}
                </div>

                </div>
            </div>
        </main>

    )
}
export async function generateStaticParams(){
    return [
        {cid:"001"},{cid:"002"},{cid:"003"}
    ]
}