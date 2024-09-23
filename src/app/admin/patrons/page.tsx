"use client"

import {useState} from "react";
import {Customer} from "@/type";

export default function Patrons() {

    const [patrons, setPatrons] = useState<Customer[]>([]);
    return (
        <div className="col-lg-9">
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">후원자 목록</h6>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                            <tr className="text-dark">
                                <th scope="col"><input className="form-check-input" type="checkbox"/></th>
                                <th scope="col">이름</th>
                                <th scope="col">메일</th>
                                <th scope="col">가입일</th>
                                <th scope="col">누적 후원금</th>
                            </tr>
                            </thead>
                            <tbody>
                            {patrons.map((patron) => (
                                <tr key={patron.cid}>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>[[${patron.name}]]</td>
                                    <td>[[${patron.username}]]</td>
                                    <td>[[${patron.cdate.toLocaleDateString()}]]</td>
                                    <td>$123</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}