'use client'
import { useState } from "react";
import DatePicker from "react-datepicker";
import { setHours, setMinutes, getDay } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

export default function DateTimePicker() {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    const [ startDate, setStartDate ] = useState<any>(
        setHours(setMinutes(new Date(), currentMinute), currentHour),
    );
    const [ endDate, setEndDate ] = useState<any>(
        setHours(setMinutes(new Date(), currentMinute), currentHour),
    );
    const isWeekday = (date: any) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };
    const filterPassedTime = (time: any) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(startDate);
        console.log(endDate);
    }
    return (
        <>
            <DatePicker
                className="border-2 border-gray-300"
                selected={startDate}
                filterDate={isWeekday}
                filterTime={filterPassedTime}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                selectsStart
                excludeTimes={[
                    // new Date('2024-01-11T17:00:00.000Z'),
                ]}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <DatePicker
                className="border-2 border-gray-300"
                selected={endDate}
                filterDate={isWeekday}
                filterTime={filterPassedTime}
                onChange={(date) => setEndDate(date)}
                showTimeSelect
                selectsEnd
                excludeTimes={[
                    startDate,
                    // new Date('2024-01-11T15:30:00.000Z'),
                ]}
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}>Submit</button>
        </>
    );
}
