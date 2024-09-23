"use client"

import {useState} from "react";
import {News} from "@/type";

export default function AdminDashboard() {
    const [todayDonation, setTodayDonation] = useState(0);
    const [donationSum, setDonationSum] = useState(0);
    const [patronsCount, setPatronsCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [newsList, setNewsList] = useState<News[]>([]);

    return (
        <div className="col-lg-9">
            <div className="row g-4 justify-content-center">
                <div className="container-fluid pt-4 px-4">
                    <div className="col g-4">
                        <div className="row g-4 mb-5">
                            <div className="col-6">
                                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                    <i className="fa fa-chart-line fa-3x text-primary"></i>
                                    <div className="ms-3">
                                        <p className="mb-2">오늘 후원금</p>
                                        <h6 className="mb-0">{todayDonation} 원</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                    <i className="fa fa-chart-bar fa-3x text-primary"></i>
                                    <div className="ms-3">
                                        <p className="mb-2">누적 후원금</p>
                                        <h6 className="mb-0">{donationSum} 원</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                    <i className="fa fa-chart-area fa-3x text-primary"></i>
                                    <div className="ms-3">
                                        <p className="mb-2">후원 아동 수</p>
                                        <h6 className="mb-0">{childrenCount} 명</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                    <i className="fa fa-chart-pie fa-3x text-primary"></i>
                                    <div className="ms-3">
                                        <p className="mb-2">후원자</p>
                                        <h6 className="mb-0">{patronsCount} 명</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">공지사항 관리</h6>
                        <a href="/news/notice/create">글 작성</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                            <tr className="text-dark">
                                <th scope="col"></th>
                                <th scope="col">제목</th>
                                <th scope="col">카테고리</th>
                                <th scope="col">작성일</th>
                            </tr>
                            </thead>
                            <tbody>
                            {newsList.map((news) => (
                                <tr key={news.nid}>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>{news.ntitle}</td>
                                    <td>{news.ncate}</td>
                                    <td>{news.ndate.toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example" className="mt-5">
                    <ul className="pagination justify-content-center">
                    <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}