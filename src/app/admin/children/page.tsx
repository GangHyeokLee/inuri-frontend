"use client"

import {useState} from "react";
import {Child} from "@/type";
import {Button, Modal} from "react-bootstrap";
import ChildDetailModal from "@/components/ChildDetailModal";

export default function ChildrenList() {

    const [children, setChildren] = useState<Child[]>([{
        chid: 1,
        chdob: new Date(),
        chname: "test",
        chdate: new Date(),
        chdesc: "test",
        chgender: "male",
        chimg: "1rtr",
        chlocation: "test",
        donations: [],
    },
        {
            chid: 2,
            chdob: new Date(),
            chname: "test2",
            chdate: new Date(),
            chdesc: "test",
            chgender: "female",
            chimg: "1rtr",
            chlocation: "test",
            donations: [],
        }]);
    const [child, setChild] = useState<Child|null>(null);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="col-lg-9">
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">후원 아동 목록</h6>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                            <tr className="text-dark">
                                <th scope="col">번호</th>
                                <th scope="col">이름</th>
                                <th scope="col">생년월일</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                children.map((child, idx) => (
                                    <tr key={child.chid} onClick={()=>{
                                        setChild(child)
                                        setShow(true)
                                    }}>
                                        <td>{idx + 1}</td>
                                        <td>{child.chname}</td>
                                        <td>{child.chdob.toLocaleDateString()}</td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {child && <ChildDetailModal show={show} handleClose={handleClose} child={child!}/>}
        </div>
    )
}