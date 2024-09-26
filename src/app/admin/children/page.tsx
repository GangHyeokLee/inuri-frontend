"use client"

import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import AddChildDialog from "@/components/admin/child/AddChildDialog";
import ChildDetailDialog from "@/components/admin/child/ChildDetailDialog";
import {MockChildren} from "@/mock";

export default function ChildrenList() {

    const children = [...MockChildren];

    return (
        <div className="w-full">
            <div className="bg-gray-100 text-center rounded p-4 mt-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="mb-0">후원 아동 관리</h3>
                    <AddChildDialog/>
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="text-dark">
                                <TableHead>번호</TableHead>
                                <TableHead>이름</TableHead>
                                <TableHead>생일</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {children.map((child, idx) => (
                                <ChildDetailDialog key={child.chid} child={child} idx={idx}/>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#"/>
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
                            <PaginationEllipsis/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#"/>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}