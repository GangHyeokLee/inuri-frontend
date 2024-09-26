import {MockChildren} from "@/mock";
import {FaHeart} from "react-icons/fa";
import Link from "next/link";

export default async function ChildDetail({params}: { params: { id: string } }) {

    const child = MockChildren.filter((child) => child.chid === parseInt(params.id))[0];

    return (
        <div className="container mx-auto py-3 flex flex-row gap-10 justify-between w-4/5">
            <div className="w-1/2">
                <img src={child.chimg || ""} className="w-full h-auto rounded" alt="Image"/>
            </div>
            <div className="flex flex-1 flex-col gap-5">
                <div className="text-3xl font-bold mb-6">{child.chname}</div>
                <p><strong>생년월일:</strong> <span>{child.chdob.toLocaleDateString()}</span></p>
                <p><strong>성별:</strong> <span>{child.chgender}</span></p>
                <p><strong>거주지:</strong> <span>{child.chlocation}</span></p>
                <br/>
                <p>{child.chdesc}</p>

                <div className="flex justify-center lg:flex-wrap mt-4">
                    <Link href="/children/donate"
                          className="border border-gray-400 rounded-full px-4 py-2 flex items-center  mb-4 text-green-600">
                        <FaHeart className="text-mainTheme text-xl mr-2"/>
                        후원하기
                    </Link>
                </div>
            </div>
        </div>
    )
}