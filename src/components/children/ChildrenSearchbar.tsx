"use client"

import {useState, KeyboardEvent, useEffect} from "react";
import {Input} from "@/components/ui/input";
import {FaSearch} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import {useRouter, useSearchParams} from "next/navigation";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function ChildrenSearchbar() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState<"name" | "location" | "age">("name");
    const router = useRouter();
    const searchParams = useSearchParams();

    const searchType = searchParams.get("searchType");
    const keyword = searchParams.get("keyword");

    useEffect(() => {
        if (searchType && ["name", "location", "age"].includes(searchType))
            setType(searchType as "name" | "location" | "age");
    }, [searchType]);

    const onSubmit = () => {
        if (!search || (searchType===type && search === keyword)) return;
        setSearch("");
        router.push("/children?searchType=" + type + "&keyword=" + search);
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            onSubmit();
        }
    };

    return (
        <div className="flex w-full items-center">
            <Select value={type} onValueChange={(value) => setType(value as "name" | "location" | "age")}>
                <SelectTrigger className="w-2/5 rounded-r-none border-r-none">
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="name">이름</SelectItem>
                    <SelectItem value="location">거주지</SelectItem>
                    <SelectItem value="age">나이</SelectItem>
                </SelectContent>
            </Select>
            <Input className="w-full p-3 rounded-none"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   placeholder="검색어를 입력하세요."
                   onKeyDown={onKeyDown}
                   type={type==="age"?"number":"text"}
            />
            <Button className="p-3 bg-gray-200 rounded-l-none" onClick={onSubmit}>
                <FaSearch className="text-white text-xl"/>
            </Button>
        </div>
    )
}