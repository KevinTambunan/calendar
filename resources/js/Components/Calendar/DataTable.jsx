import React from "react"
import { Link } from "@inertiajs/inertia-react"

const rowTable = (datas) => {
    return datas.map((data, i) => {
        return (
            <tr key={i}>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">{data.title}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>
                            <div className="text-sm opacity-50">{data.title}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{data.date}</span>
                </td>
                <th>
                    <Link className="mr-2" href={`/edit/${data.id}`}>Ubah</Link>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        )
    })
}

const DataTable = ({ datas }) => {
    // console.log(datas)
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rowTable(datas)}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
