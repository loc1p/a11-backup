'use client'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Select,MenuItem} from "@mui/material"
import {TextField} from "@mui/material"
import { Dayjs } from 'dayjs';

export default function LocationDateReserve({onNameChange,onTelChange,onVenueChange,onDateChange}
    :{onNameChange:Function,onTelChange:Function,onVenueChange:Function,onDateChange:Function}){
    return(
        <div className="bg-slate-100 rounded-lg gap-x-5 gap-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                    onChange={(value:Dayjs|null)=>{onDateChange(value)}}/>
            </LocalizationProvider>

            <TextField name="Name-Lastname" label="Name-Lastname" variant="standard"
                onChange={(e)=>{onNameChange(e.target.value)}}/>
            <TextField name="Contact-Number" label="Contact-Number" variant="standard"
                onChange={(e)=>{onTelChange(e.target.value)}}/>
            <Select variant="standard" name="venue" id="venue" defaultValue=""
                className="h-[2em] w-[200px]"
                onChange={(e)=>{onVenueChange(e.target.value)}}
            >
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>

            </Select>
        </div>
    )
}
