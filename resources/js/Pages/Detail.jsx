const Detail = (props) => {
    return (
        <>
            <div className="flex justify-center p-40 bg-slate-300 h-screen">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p>{props.description}</p>
                        <p>{props.date}</p>
                    </div>
                    <figure><img src="https://placeimg.com/400/225/arch" /></figure>
                </div>
            </div>

        </>
    )
}

export default Detail
