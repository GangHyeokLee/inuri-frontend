import {PropsWithChildren} from "react";
import SearchBar from "@/components/searchbar";
import {FaAppleAlt} from "react-icons/fa";
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";

interface Props extends PropsWithChildren{
    title: string;
    categories: {
        name: string;
        link: string;
    }[]
}

export default function NewsLayout({children, title, categories}: Props){
    return(
        <div className="w-4/5 flex xl:flex-row flex-col mt-10 gap-20">
            <div className="flex flex-col justify-start xl:w-1/5 w-full gap-8">
                <h1 className="text-6xl font-extrabold">{title}</h1>
                <SearchBar addr={""}/>
                <div className="flex flex-col bg-secondary rounded-xl p-5 gap-4">
                    <h1 className="text-3xl text-gray-600 mb-5">Categories</h1>
                    {categories.map((category, index) => (
                        <Link className="flex justify-between" key={index} href={category.link}>
                            <div className="cursor-pointer hover:text-yellow-500 flex gap-2 items-center text-mainTheme">
                                <FaAppleAlt />
                                <p>{category.name}</p>
                            </div>
                            <div className="text-gray-600 ">
                                (3)
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="xl:mt-12 flex flex-col flex-1 gap-10">
                <div className="hidden xl:block">
                    기업정보 {">"} 소식 {">"} {categories[0].name}
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center w-1/12 text-lg">번호</TableHead>
                            <TableHead className="text-center text-lg">제목</TableHead>
                            <TableHead className="text-center w-1/4 text-lg">작성일</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}