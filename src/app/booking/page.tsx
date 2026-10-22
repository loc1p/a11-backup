"use client"
import DateReserve from "@/components/DateReserve";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interface";
import { Dayjs } from "dayjs";

export default function BookingPage() {

  const dispatch = useDispatch<AppDispatch>()

  const [nameLastname, setNameLastname] = useState<string>("")
  const [tel, setTel] = useState<string>("")
  const [venue, setVenue] = useState<string>("")
  const [bookDate, setBookDate] = useState<Dayjs|null>(null)

  const makeBooking = () => {
    if(nameLastname && tel && venue && bookDate){
      const item:BookingItem = {
        nameLastname: nameLastname,
        tel: tel,
        venue: venue,
        bookDate: bookDate.format("YYYY/MM/DD")
      }
      dispatch(addBooking(item))
    }
  }

  return (
      <main className="w-[100%] flex flex-col items-center space-y-4 ">


        <h1 className="text-3xl font-bold">Venue Booking</h1>
        <DateReserve onNameChange={(value:string)=>setNameLastname(value)}
          onTelChange={(value:string)=>setTel(value)}
          onVenueChange={(value:string)=>setVenue(value)}
          onDateChange={(value:Dayjs|null)=>setBookDate(value)}/>
        <button className="bg-gray-300 rounded-lg p-2" name="Book Venue"
          onClick={makeBooking}>Book Venue</button>
      </main>
  );
}
