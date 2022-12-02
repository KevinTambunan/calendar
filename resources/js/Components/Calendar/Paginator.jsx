import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ datas }) => {
    console.log(datas)
    const current = datas.current_page;
    const prev = datas.links[current - 1].url
    const next = datas.links[current + 1].url
    return (
        <div className="btn-group">
            {prev && <Link href={prev} className="btn btn-accent">«</Link>}
            <button className="btn">{current}</button>
            {next && <Link href={next} className="btn">»</Link>}
        </div>
    )
}

export default Paginator
