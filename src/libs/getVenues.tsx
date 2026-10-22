export default async function getCars(){
        const response = await fetch("https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues")
        if(!response.ok){
            throw new Error("Failed to fetch cars")
        }
        return await response.json()
}