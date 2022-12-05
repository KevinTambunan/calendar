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
        <div className="flex justify-center min-h-screen form-group">
            <form>
                <input type="text" placeholder="Title" className="flex-1 input w-full" onChange={(title) => {setTitle(title.target.value)}}/>
                <input type="text" placeholder="Deskripsi" className="flex-1 input w-full" onChange={(description) => {setDescription(description.target.value)}}/>
                <input type="date" placeholder="Type here" className="flex-1 input w-full" onChange={(date) => {setDate(date.target.value)}}/>
                <button className="btn btn-outline" type="button" onClick={() => handleSubmit()}>Submit</button>
            </form>
        </div>
    )
}

export default Create;
