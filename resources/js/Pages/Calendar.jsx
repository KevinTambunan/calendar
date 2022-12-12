import Alert from "@/Components/Calendar/Alert";
import DataTable from "@/Components/Calendar/DataTable";
import Paginator from "@/Components/Calendar/Paginator";
import Navbar from "@/Components/navbar";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";


const Calendar = (props) => {
    const [message, setMessage] = useState(props.flash.message)
    // console.log(props)
    const setWaktu = () => {
        setTimeout(() => {
            setMessage(null)
        }, 3000)
    }
    return (
        <>
            <div className='min-h-screen'>
                <Navbar />
                <div className="flex justify-end flex-1 w-80 ">
                    {
                        message && <Alert message={props.flash.message}/>
                    }
                    {setWaktu()}
                </div>
                <div className="flex justify-center">
                <Link href="/addNew" as="button" type="button" className="btn btn-accent">Add New</Link>
                </div>
                <div className='flex pl-4 pr-4'>

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
