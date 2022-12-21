import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ datas }) => {
    // console.log(datas)
    const current = datas.current_page;
    const prev = datas.links[current - 1].url
    const next = datas.links[current + 1].url
    return (
        <div className="btn-group">
            {prev && <Link href={prev} className="btn btn-outline ">«</Link>}
            <button className="btn glass hover:btn-accent">{current}</button>
            {next && <Link href={next} className="btn btn-outline">»</Link>}
        </div>
    )
}

export default Paginator
