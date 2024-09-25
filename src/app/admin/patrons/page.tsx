import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import PatronDetailDialog from "@/components/admin/patrons/PatronDetailDialog";
import {MockPatron} from "@/mock";

export default function Patrons() {

    const patrons = [...MockPatron];
    return (
        <div className="w-full">
            <div className="bg-gray-100 text-center rounded p-4 mt-10">
                <div className="flex items-center justify-between mb-4"><h3 className="mb-0">후원자 목록</h3>
                </div>
                <div className="table-responsive">
                    <Table className="table text-start align-middle table-bordered table-hover mb-0">
                        <TableHeader>
                            <TableRow className="text-dark">
                                <TableHead scope="col">이름</TableHead>
                                <TableHead scope="col">메일</TableHead>
                                <TableHead scope="col">가입일</TableHead>
                                <TableHead scope="col">누적 후원금</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {patrons.map((patron) => (
                                <PatronDetailDialog key={patron.cid} patron={patron}/>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}