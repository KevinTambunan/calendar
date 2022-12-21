import {React, useState} from "react";
import Alert from "@/Components/Calendar/Alert";
import { DemoApp } from "@/Components/Calendar/Calendar";
import Item from "@/Components/Dashboard/Item";
import { Link } from "@inertiajs/inertia-react";


const Events = (props) => {
    const [message, setMessage] = useState(props.flash.message)
    // console.log(props)
    const setWaktu = () => {
        setTimeout(() => {
            setMessage(null)
        }, 10000)
    }

    return (
        <>
            <div className="flex h-screen">
                <div className="w-72 min-h-screen bg-slate-800 text-slate-300 p-5">
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
                    <div className="flex-1 p-2">
                        <DemoApp />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Events
