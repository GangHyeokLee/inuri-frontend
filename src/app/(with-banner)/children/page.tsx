"use client"

import {Input} from "@/components/ui/input";
import {useState} from "react";
import {MockChildren} from "@/mock";
import Link from "next/link";
import {FaSearch} from "react-icons/fa";

export default function ChildrenList() {

    const [children, setChildren] = useState(MockChildren);
    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex w-full justify-end items-center">
                <Input className="w-1/3 p-5 rounded-none rounded-l-xl" placeholder="keywords"
                       aria-describedby="search-icon-1"/>
                <span className="-text p-3 bg-gray-200 rounded-r-md">
                        <FaSearch className="text-white text-xl"/>
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    children.map((child) => (
                        <Link href={`/children/detail/${child.chid}`}
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