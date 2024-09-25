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
import {ChangeEvent, useState} from "react";
import Postcode from "@/components/DaumAddress";
import ReactQuill from "react-quill";
import {Input} from "@/components/ui/input";

export default function AddChildDialog() {

    const [value, setValue] = useState('');
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState<Date>(new Date());

    const [gender, setGender] = useState<"male" | "female">("male");
    const [address, setAddress] = useState("");

    const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value as "male" | "female");
    };

    const formatDate = (date: Date): string => {
        return date.toISOString().split('T')[0];
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(new Date(e.target.value));
    };

    const handleSubmit = () => {

    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">아동 등록</Button>
            </DialogTrigger>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle>아동 등록</DialogTitle>
                </DialogHeader>
                <form className="bg-white rounded h-full p-4 shadow" action="/child/add" method="post"
                      encType="multipart/form-data">
                    <div className="mb-4">
                        <label htmlFor="inputEmail3" className="block text-gray-700 text-sm font-bold mb-2">이름</label>
                        <Input
                            type="text"
                            name="chname"
                            className="form-input block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">성별</label>
                        <div className="flex space-x-4">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="genderMale"
                                    value="male"
                                    onChange={handleGenderChange}
                                    checked={gender === "male"}
                                />
                                <label className="form-check-label" htmlFor="genderMale">남성</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="genderFemale"
                                    onChange={handleGenderChange}
                                    value="female"
                                    checked={gender === "female"}
                                />
                                <label className="form-check-label" htmlFor="genderFemale">여성</label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="inputBirthday"
                               className="block text-gray-700 text-sm font-bold mb-2">생년월일</label>
                        <Input
                            type="date"
                            value={formatDate(birthday)} // Convert Date object to string
                            onChange={handleDateChange} // Update state with selected date
                            className="form-input block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            id="inputBirthday"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="inputPassword3"
                               className="block text-gray-700 text-sm font-bold mb-2">주소</label>
                        <div className="flex flex-col">
                            <Postcode setAddress={setAddress}/>
                            <Input
                                type="text"
                                disabled
                                value={address}
                                className="form-input block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            />
                            <span id="guide" className="text-gray-500 text-sm" style={{display: "none"}}></span>
                            <Input
                                type="text"
                                id="sample4_detailAddress"
                                name="location_detail"
                                placeholder="상세주소"
                                className="form-input block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 mt-2"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="formFile" className="block text-gray-700 text-sm font-bold mb-2">사진</label>
                        <input
                            className="form-input block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            type="file"
                            id="formFile"
                            name="file"
                        />
                    </div>

                    <div className="mb-10 py-3">
                        <label htmlFor="formFile" className="block text-gray-700 text-sm font-bold mb-2">설명</label>
                        <ReactQuill className="w-full h-32 rounded-md" theme="snow" value={value}
                                    onChange={setValue}/>
                    </div>
                </form>

                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
