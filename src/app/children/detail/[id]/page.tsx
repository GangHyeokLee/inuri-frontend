import {MockChildren} from "@/mock";
import {FaHeart} from "react-icons/fa";
import Link from "next/link";
import ChildLetterDialog from "@/components/children/ChildLetterDialog";

export default async function ChildDetail({params}: { params: { id: string } }) {

    const child = MockChildren.filter((child) => child.chid === parseInt(params.id))[0];

    return (
        <div className="flex flex-col justify-center w-full">
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

                    <div className="flex gap-10 items-center justify-center lg:flex-wrap mt-4">
                        <Link href="/children/donate"
                              className="border border-gray-400 rounded-full px-4 py-2 flex items-center  mb-4 text-green-600">
                            <FaHeart className="text-mainTheme text-xl mr-2"/>
                            후원하기
                        </Link>
                        <ChildLetterDialog />
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-3 w-4/5 mt-10">
                <div className="flex border-b mb-3">
                    <button className="border-b-2 border-orange-400 py-2 px-4 text-lg">
                        후원자들
                    </button>
                </div>
                <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {child.donations.map((donation) => (
                        <div key={donation.did}
                             className="p-3 border border-orange-300 rounded-xl shadow-sm bg-gray-100">
                            <strong>후원자 이름:</strong> <span>{donation.customer}</span>
                            <br/>
                            <strong>후원 금액:</strong> <span>{donation.donationAmount}</span> 원
                            <br/>
                            <strong>후원 날짜:</strong> <span>{new Date(donation.ddate).toLocaleDateString()}</span>
                            <br/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}