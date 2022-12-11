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
            <div className="flex justify-center min-h-screen form-group mt-8">
            <form>
                <input type="text" placeholder="Title" className="flex-1 input w-full" value={title} onChange={(title) => {setTitle(title.target.value)}} />
                <input type="text" placeholder="Deskripsi" className="flex-1 input w-full" onChange={(description) => {setDescription(description.target.value)}} value={description}/>
                <input type="date" placeholder="Type here" className="flex-1 input w-full" onChange={(date) => {setDate(date.target.value)}} />
                <button className="btn btn-outline" type="button" onClick={() => handleSubmit()}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Edit
