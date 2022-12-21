import Alert from "@/Components/Calendar/Alert";
import DataTable from "@/Components/Calendar/DataTable";
import Paginator from "@/Components/Calendar/Paginator";
import Item from "@/Components/Dashboard/Item";
import Navbar from "@/Components/navbar";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";


const Calendar = (props) => {
    const [message, setMessage] = useState(props.flash.message)
    // console.log(props)
    const setWaktu = () => {
        setTimeout(() => {
            setMessage(null)
        }, 10000)
    }
    return (
        <>
            <div className="flex h-screen bg-slate-300">
                <div className="w-72 min-h-screen bg-slate-800 p-5 text-slate-300">
                    <div className="flex gap-20">
                        <h1 className="text-3xl justify-center text-white">Events.</h1>
                        <div className="justify-end dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* <img src="https://placeimg.com/80/80/people" /> */}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <Item />
                </div>

                <div className="flex-1 min-h-screen w-full">
                    <div className="flex mt-10 ml-14">
                        <div className="w-32">
                            <h1 className="text-2xl text-cyan-900 mt-2">Dashboard</h1>
                        </div>
                        <div className="flex-1 justify-end w-64">
                            <Link href="/addNew" as="button" type="button" className="btn glass hover:btn-accent">Add New</Link>
                        </div>
                        <div className="flex-2 justify-end mr-20">
                            {
                                message && <Alert message={props.flash.message} />
                            }
                            {setWaktu()}
                        </div>
                    </div>
                    <div className='flex pl-4 pr-4'>
                        <DataTable datas={props.data.data} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <Paginator datas={props.data.meta} />
                    </div>
                </div>

            </div>

        </>

    )
}
export default Calendar;
