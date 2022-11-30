import React from "react";


const Calendar = (props) => {

    console.log(props);
    return (
        <div className="flex min-h-screen bg-neutral-800 text-white p-10">
            <table>
                <thead className="border">
                    <tr>
                        <th className="border">No</th>
                        <th className="border">Title</th>
                        <th className="border">Desctiption</th>
                        <th className="border">Date</th>
                        <th className="border">Is Pop Up</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data ? props.data.map((item, i) => {
                            return(
                                <tr key={i}>
                                    <td className="border">{i}</td>
                                    <td className="border">{item.title}</td>
                                    <td className="border">{item.description}</td>
                                    <td className="border" >{item.date}</td>
                                    <td className="border">{item.is_popup ? "Iya" : "Tidak"}</td>
                                </tr>
                            )
                        }) : "Data belum ada"
                    }

                </tbody>
            </table>
        </div>
    )
}


export default Calendar;
