"use client"

import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import Postcode from "@/components/DaumAddress";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [postCode, setPostCode] = useState("");
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="mx-2 cursor-pointer">회원가입</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>회원가입</DialogTitle>
                </DialogHeader>
                <div className="my-3">
                    <form action="/signin" method="post">
                        <div className="mb-4">
                            <Label htmlFor="username"
                                   className="block text-left text-gray-700">성함</Label>
                            <Input type="email" value={name} onChange={(e) => setName(e.target.value)}
                                   className=" mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"/>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="username"
                                   className="block text-left text-gray-700">이메일</Label>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                   className=" mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"/>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password"
                                   className="block text-left text-gray-700">비밀번호</Label>
                            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                   className="mt-1 block w-full rounded-md shadow-sm focus:border-mainTheme"/>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password"
                                   className="block text-left text-gray-700">비밀번호확인</Label>
                            <Input type="password" value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)}
                                   className="mt-1 block w-full rounded-md shadow-sm focus:border-mainTheme"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="inputPassword3"
                                   className="block text-gray-700 text-sm font-bold mb-2">주소</label>
                            <div className="flex flex-col gap-3">
                                <div className="flex">

                                    <Input type="text" disabled value={postCode}
                                           placeholder="우편번호"
                                           className="block w-full rounded-md shadow-sm focus:border-mainTheme"/>
                                    <Postcode setAddress={setAddress} setPostCode={setPostCode}/>
                                </div>
                                <Input
                                    type="text"
                                    disabled
                                    placeholder="주소"
                                    value={address}
                                    className="block w-full rounded-md shadow-sm focus:border-mainTheme"/>
                                <Input
                                    type="text"
                                    id="sample4_detailAddress"
                                    name="location_detail"
                                    placeholder="상세주소"
                                    value={addressDetail}
                                    onChange={(e) => setAddressDetail(e.target.value)}
                                    className="block w-full rounded-md shadow-sm focus:border-mainTheme"/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password"
                                   className="block text-left text-gray-700">전화번호</Label>
                            <Input type="text" value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)}
                                   className="mt-1 block w-full rounded-md shadow-sm focus:border-mainTheme"/>
                        </div>

                        <Button type="submit"
                                className="bg-mainTheme w-full py-2 rounded-lg text-white hover:bg-mainThemeHover">회원가입
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
        ;
}