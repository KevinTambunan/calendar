import DataTable from "@/Components/Calendar/DataTable";
import Paginator from "@/Components/Calendar/Paginator";
import Navbar from "@/Components/navbar";
import React from "react";

const Calendar = (props) => {
    return (
        <>
            <div className='min-h-screen bg-slate-200'>
                <Navbar />
                <div className='flex p-4'>
                    <DataTable datas={props.data.data}/>
                </div>
                <div className='flex justify-center items-center'>
                    <Paginator datas={props.data.meta}/>
                </div>
            </div>
        </>

    )
}


export default Calendar;
