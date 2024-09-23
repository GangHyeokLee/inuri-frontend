import {Pagination} from "react-bootstrap";

export default function pagination({start,now, end}: { start: number, now: number, end: number }) {
    return (
        <Pagination>
            <Pagination.First/>
            <Pagination.Prev/>
            <Pagination.Item>{1}</Pagination.Item>
            {end > 5 && (<Pagination.Ellipsis/>)}

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            {start < (end - 5) && <Pagination.Ellipsis/>}
            <Pagination.Next/>
            <Pagination.Last/>
        </Pagination>
    )
}