"use client"

import {useState} from "react";
import {News} from "@/type";
import {FaChartBar, FaChartLine, FaHandsHelping} from "react-icons/fa";
import DashboardCard from "@/components/admin/DashboardCard";
import {FaHandsHoldingChild} from "react-icons/fa6";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";

export default function AdminDashboard() {
    const [todayDonation, setTodayDonation] = useState(0);
    const [donationSum, setDonationSum] = useState(0);
    const [patronsCount, setPatronsCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [newsList, setNewsList] = useState<News[]>([]);

    return (
        <div className="w-full">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <DashboardCard title={"오늘 후원금"} count={todayDonation + " 원"}>
                        <FaChartLine className="text-mainTheme text-6xl"/>
                    </DashboardCard>
                    <DashboardCard title={"누적 후원금"} count={donationSum + " 원"}>
                        <FaChartBar className="text-mainTheme text-6xl"/>
                    </DashboardCard>
                </div>
                <div className="flex gap-5">
                    <DashboardCard title={"후원 아동 수"} count={childrenCount + " 명"}>
                        <FaHandsHoldingChild className="text-mainTheme text-6xl"/>
                    </DashboardCard>
                    <DashboardCard title={"후원자"} count={patronsCount + " 명"}>
                        <FaHandsHelping className="text-mainTheme text-6xl"/>
                    </DashboardCard>
                </div>
            </div>
            <div className="bg-gray-100 text-center rounded p-4 mt-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="mb-0">공지사항 관리</h3>
                    <a href="/news/notice/create" className="text-blue-500">글 작성</a>
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                        <TableRow className="text-dark">
                            <TableHead></TableHead>
                            <TableHead>제목</TableHead>
                            <TableHead>카테고리</TableHead>
                            <TableHead>작성일</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {newsList.map((news) => (
                            <TableRow className="hover:bg-gray-200" key={news.nid}>
                                <TableCell className="border border-gray-300">
                                    <input className="form-check-input" type="checkbox"/>
                                </TableCell>
                                <TableCell className="border border-gray-300">{news.ntitle}</TableCell>
                                <TableCell className="border border-gray-300">{news.ncate}</TableCell>
                                <TableCell className="border border-gray-300">{news.ndate.toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}