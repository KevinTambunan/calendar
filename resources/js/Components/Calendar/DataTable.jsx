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
                    <div className="flex items-center">
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-75">{data.title}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex items-center">
                        <div>
                            <div className="text-sm opacity-75">{data.title}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{data.date}</span>
                </td>
                <th>
                    <Link className="btn btn-ghost btn-xs mr-2" href={`/edit/${data.id}`}>Ubah</Link>
                    <Link className="btn btn-ghost btn-xs mr-2" href={`/detail/${data.id}`}>Detail</Link>
                </th>
            </tr>
        )
    })
}

const DataTable = ({ datas }) => {
    // console.log(datas)
    return (
        <div className="overflow-x-auto w-full pl-10 pr-10 pt-3 pb-3">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
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
