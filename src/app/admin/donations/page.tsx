"use client"

import {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Donation} from "@/type";
import {MockDonation} from "@/mock";

export default function Donations() {

    const [donations, setDonations] = useState<Donation[]>(MockDonation);
    return (
        <div className="w-full">
            <div className="bg-gray-100 text-center rounded p-4 mt-10">
                <div className="flex items-center justify-between mb-4"><h3 className="mb-0">후원자 목록</h3>
                </div>
                <div className="table-responsive">
                    <Table className="table text-start align-middle table-bordered table-hover mb-0">
                        <TableHeader>
                            <TableRow className="text-dark">
                                <TableHead scope="col">아동</TableHead>
                                <TableHead scope="col">후원인</TableHead>
                                <TableHead scope="col">후원금액</TableHead>
                                <TableHead scope="col">후원 방법</TableHead>
                                <TableHead scope="col">후원 기간</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                donations.map((donation) => (
                                    <TableRow key={donation.did}>
                                        <TableCell>{donation.child.chname}</TableCell>
                                        <TableCell>{donation.customer.name}</TableCell>
                                        <TableCell>{donation.donationAmount}</TableCell>
                                        <TableCell>{donation.donationMethod}</TableCell>
                                        <TableCell>{donation.donationPeriod}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}