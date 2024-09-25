import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import {TableCell, TableRow} from "@/components/ui/table";
import { Customer} from "@/types/type";

export default function PatronDetailDialog({patron}:{patron: Customer}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <TableRow key={patron.cid} className="hover:bg-gray-200 cursor-pointe">
                    <TableCell>{patron.name}</TableCell>
                    <TableCell>{patron.username}</TableCell>
                    <TableCell>{patron.cdate.toLocaleDateString()}</TableCell>
                    <TableCell>$123</TableCell>
                </TableRow>
            </DialogTrigger>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle>후원자 상세정보</DialogTitle>
                </DialogHeader>
                    <div className="col-lg-6">
                        <h4 className="fw-bold mb-3">{patron.name}</h4>
                        <p><strong>가입일:</strong> <span>{patron.cdate.toLocaleDateString()}</span></p>
                        <p><strong>메일:</strong> <span>{patron.username}</span></p>
                        {/*<p><strong>거주지:</strong> <span>{patron.}</span></p>*/}
                    </div>
            </DialogContent>
        </Dialog>
    )
}
