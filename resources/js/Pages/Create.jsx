import Input from "@/Components/Input";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = () => {
        const data = {
            "title" : title,
            "description" : description,
            "date" : date
        }

        Inertia.post('/addNew', data)
        setTitle('')
        setDescription('')
        setDescription('')
    }

    return (
        <div className="justify-center">

            <form className="flex m-40 p-10 rounded-3xl gap-4 bg-slate-300">
                <input type="text" placeholder="Title" className="w-64 input" onChange={(title) => {setTitle(title.target.value)}}/>
                <textarea className="textarea textarea-bordered flex-1 w-72 h-32" placeholder="Deskripsi" onChange={(description) => {setDescription(description.target.value)}}></textarea>
                {/* <input type="text" placeholder="Deskripsi" className=" input" onChange={(description) => {setDescription(description.target.value)}}/> */}
                <input type="date" placeholder="Type here" className="flex-2 w-64 input" onChange={(date) => {setDate(date.target.value)}}/>
                <button className="btn btn-primary" type="button" onClick={() => handleSubmit()}>Submit</button>
            </form>
        </div>
    )
}

export default Create;
