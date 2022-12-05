import DataTable from "@/Components/Calendar/DataTable";
import Paginator from "@/Components/Calendar/Paginator";
import Navbar from "@/Components/navbar";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Calendar = (props) => {
    console.log(props)
    return (
        <>
            <div className='min-h-screen bg-slate-200'>
                <Link href="/addNew" as="button" type="button">Add New</Link>
                <div className='flex p-4 bg-neutral-700'>
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
