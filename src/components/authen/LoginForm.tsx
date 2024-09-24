"use client"

import {useState} from "react";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import RegisterForm from "@/components/authen/RegisterForm";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="mx-2 cursor-pointer">로그인</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>로그인</DialogTitle>
                </DialogHeader>
                <div className="my-3">
                    <div className="mb-4">
                        <Label htmlFor="username"
                               className="block text-left text-gray-700">사용자ID</Label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                               className="mt-1 block w-full rounded-md shadow-sm focus:border-mainTheme"/>
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="password"
                               className="block text-left text-gray-700">비밀번호</Label>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                               className="mt-1 block w-full rounded-md shadow-sm focus:border-mainTheme"/>
                    </div>
                    <button type="submit"
                            className="bg-mainTheme w-full py-2 rounded-lg text-white hover:bg-mainThemeHover">로그인
                    </button>
                </div>
                <div className="flex justify-center mb-0 mt-3">
                    <a href="#" className="text-mainTheme hover:underline">비밀번호 찾기</a>
                </div>
            </DialogContent>
        </Dialog>
    );
}