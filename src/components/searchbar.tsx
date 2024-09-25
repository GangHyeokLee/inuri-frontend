"use client"

import {useState} from "react";
import {Input} from "@/components/ui/input";
import {FaSearch} from "react-icons/fa";
import {Button} from "@/components/ui/button";

interface Props {
    addr: string;
}

export default function SearchBar({addr}: Props) {
    const [value, setValue] = useState("");

    const handleSearch = () => {
        console.log(value, addr);
        setValue("");
    }

    return (
        <>
            <Input className="w-1/3 p-3 rounded-none rounded-l-xl"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   placeholder="keywords"/>
            <Button className="-text p-3 bg-gray-200 rounded-r-md" onClick={handleSearch}>
                <FaSearch className="text-white text-xl"/>
            </Button>
        </>
    )
}