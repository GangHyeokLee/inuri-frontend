"use client"

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import dynamic from "next/dynamic";
import {FaEnvelope} from "react-icons/fa";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});


export default function ChildLetterDialog() {

    const [value, setValue] = useState('');
    const [prompt, setPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleGenerateImage = async () => {
        if (!prompt) return;
        const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER_URL + "/api/images/generate", {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: prompt
            }
        );
        const data = await response.json();
        if(data.imageUrl){
            setImageUrl(data.imageUrl);
        }
        else{
            alert("오류발생");
        }
    }

    const handleSubmit = () => {

    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="cursor-pointer border border-gray-400 rounded-full px-4 py-2 flex items-center  mb-4 text-green-600">
                    <FaEnvelope className="text-mainTheme text-xl mr-2"/>
                    편지 쓰기
                </div>
            </DialogTrigger>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle>편지쓰기</DialogTitle>
                </DialogHeader>
                <div className="bg-white rounded h-full p-4 shadow">
                    <div className="mb-4 flex gap-5">
                        <Input
                            type="text"
                            placeholder="생성하고 싶은 이미지를 입력하세요."
                            className="form-input block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <Button onClick={handleGenerateImage}>
                            생성하기
                        </Button>
                    </div>
                    {imageUrl && <div className="mb-10 py-3">
                        <img src={imageUrl} alt={"생성 이미지"}/>
                    </div>}

                    <div className="mb-10 py-3">
                        <label htmlFor="formFile" className="block text-gray-700 text-sm font-bold mb-2">편지 내용</label>
                        <ReactQuill className="w-full h-32 rounded-md" theme="snow" value={value}
                                    onChange={setValue}/>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
