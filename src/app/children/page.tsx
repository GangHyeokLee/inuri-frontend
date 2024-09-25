import {MockChildren} from "@/mock";
import Link from "next/link";
import SearchBar from "@/components/searchbar";

export default function ChildrenList() {

    const children = MockChildren;
    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex w-full justify-end items-center">
                <SearchBar addr={""}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    children.map((child) => (
                        <Link key={child.chid} href={`/children/detail/${child.chid}`}
                              className="rounded-lg shadow-md position-relative">
                            <div className="child-img">
                                <img src={child.chimg}
                                     className="img-fluid rounded-t-lg"
                                     alt="아동 이미지"/>
                            </div>
                            <div className="p-4 border border-secondary border-t-0 rounded-b-lg">
                                <h4 className="text-xl font-semibold">{child.chname}</h4>
                                <p>성별: <span>{child.chgender === "male" ? "남자" : "여자"}</span></p>
                                <p>생년월일: <span>{child.chdob.toLocaleDateString()}</span></p>
                                <p>거주지: <span>{child.chlocation}</span></p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}