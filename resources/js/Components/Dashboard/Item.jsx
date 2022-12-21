import { FiCalendar, FiBookmark, FiUser, FiTrello, FiLogOut} from "react-icons/fi";

const Item = () => {
    return (
        <ul className="flex-row mt-8">
            <li className="flex g-3 p-3 hover:bg-gray-50 hover:rounded-md hover:text-cyan-900">
                <span className="w-7 p-1 hover:bg-cyan-900 bg-gray-50  hover:text-gray-50 text-cyan-900 rounded-md justify-center content-center">
                    <FiCalendar className="justify-self-center text-xl" />
                </span>
                <a href="/calendar" className="mt-1 ml-3">Dashboard</a>
            </li>
            <li className="flex g-3 p-3 hover:bg-gray-50 hover:rounded-md hover:text-cyan-900">
                <span className="w-7 p-1 hover:bg-cyan-900 bg-gray-50  hover:text-gray-50 text-cyan-900 rounded-md justify-center content-center">
                    <FiBookmark className="justify-self-center text-xl" />
                </span>
                <a href="/calendar" className="mt-1 ml-3">Calendar</a>
            </li>
            <li className="flex g-3 p-3 hover:bg-gray-50 hover:rounded-md hover:text-cyan-900">
                <span className="w-7 p-1 hover:bg-cyan-900 bg-gray-50  hover:text-gray-50 text-cyan-900 rounded-md justify-center content-center">
                    <FiTrello className="justify-self-center text-xl" />
                </span>
                <a href="/events" className="mt-1 ml-3">Events</a>
            </li>
            <li className="flex g-3 p-3 hover:bg-gray-50 hover:rounded-md hover:text-cyan-900">
                <span className="w-7 p-1 hover:bg-cyan-900 bg-gray-50  hover:text-gray-50 text-cyan-900 rounded-md justify-center content-center">
                    <FiUser className="justify-self-center text-xl" />
                </span>
                <a href="/calendar" className="mt-1 ml-3">Profile</a>
            </li>
            <li className="flex g-3 p-3 hover:bg-gray-50 hover:rounded-md hover:text-cyan-900">
                <span className="w-7 p-1 hover:bg-cyan-900 bg-gray-50  hover:text-gray-50 text-cyan-900 rounded-md justify-center content-center">
                    <FiLogOut className="justify-self-center text-xl" />
                </span>
                <a href="" className="mt-1 ml-3">Logout</a>
            </li>
        </ul>
    )
}

export default Item
