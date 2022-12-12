import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import React, { useState } from "react";

const Edit = (props) => {
    const [title, setTitle] = useState(props.data.title)
    const [description, setDescription] = useState(props.data.description)
    const [date, setDate] = useState(props.data.date)
    // console.log(props)

    const handleSubmit = () => {
        // tangkap data
        const data = {
            'title' : title,
            'description' : description,
            'date' : date
        }

        Inertia.post(`/edit/${props.data.id}`, data)
        setTitle('')
        setDescription('')
        setDate('')
    }
    return (
        <>
            <Head title={props.header}/>
            <div className="justify-center">
            <form className="flex m-40 p-10 rounded-3xl gap-4 bg-slate-300">
                <input type="text" placeholder="Title" className="w-64 input" value={title} onChange={(title) => {setTitle(title.target.value)}} />
                <textarea className="textarea textarea-bordered flex-1 w-72 h-40" onChange={(masukan) => {setDescription(masukan.target.value)}}>{description}</textarea>
                {/* <input type="text" placeholder="Deskripsi" className="flex-1 w-72 input" onChange={(description) => {setDescription(description.target.value)}} value={description}/> */}
                <input type="date" placeholder="Type here" className="flex-2 w-64 input" onChange={(date) => {setDate(date.target.value)}} />
                <button className="btn btn-primary" type="button" onClick={() => handleSubmit()}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Edit
