import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues"
export default function Venue(){
    const venues = getVenues();
    return(
        <main>         
        <VenueCatalog venuesJson={venues}/>


        </main>
    )
}