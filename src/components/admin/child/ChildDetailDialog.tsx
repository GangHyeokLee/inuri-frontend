import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import {TableCell, TableRow} from "@/components/ui/table";
import {Child} from "@/types/type";

export default function ChildDetailDialog({child, idx}:{child: Child, idx: number}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <TableRow className="hover:bg-gray-200 cursor-pointer">
                    <TableCell>{idx+1}</TableCell>
                    <TableCell>{child.chname}</TableCell>
                    <TableCell
                    >{child.chdob.toLocaleDateString()}</TableCell>
                </TableRow>
            </DialogTrigger>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle>아동 상세 정보</DialogTitle>
                </DialogHeader>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="border rounded">
                            <img src={child.chimg} className="img-fluid rounded" alt={child.chname}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="fw-bold mb-3">{child.chname}</h4>
                        <p><strong>생년월일:</strong> <span>{child.chdob.toLocaleDateString()}</span></p>
                        <p><strong>성별:</strong> <span>{child.chgender}</span></p>
                        <p><strong>거주지:</strong> <span>{child.chlocation}</span></p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
