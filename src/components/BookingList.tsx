"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"
export default function BookingList() {
    const bookingItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return(
        <>
            {bookingItems.length === 0 ? 
             <div className="text-xl text-center">No Venue Booking</div>:
            
            bookingItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.nameLastname} >
                    <div className="text-xl">
                        {bookingItem.nameLastname}
                    </div>
                    <div className="text-xl">{bookingItem.tel}</div>
                    <div className="text-xl">{bookingItem.venue}</div>
                    <div className="text-md">{bookingItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white"
                onClick={()=>dispatch(removeBooking(bookingItem))}
            >
               Remove from Cart</button>
                </div>
            )
            )}
        </>
    )
}