import {MockChildren} from "@/mock";
import Link from "next/link";
import ChildrenSearchbar from "@/components/children/ChildrenSearchbar";
import {Child} from "@/types/type";

async function SearchResult({}: {
    searchType?: string;
    keyword?: string;
    filter?: string;
}) {
    const response: Child[] = [...MockChildren];
    const children = response;

    return (
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
    )
}

export default function ChildrenList({searchParams}: {
    searchParams: {
        searchType?: string;
        keyword?: string;
        filter?: string;
    };
}) {
    return (
        <div className="flex flex-col gap-10 w-full mt-10 justify-center">
            <div className="flex w-fit lg:gap-5 gap-2 mx-auto whitespace-nowrap">
                <Link href="/children?filter=all"
                      className={"text-lg items-center font-bold rounded-xl py-3 px-5 border-2 border-mainTheme " +
                          ((!searchParams.filter || searchParams.filter === "all")
                              ? "text-mainTheme bg-white"
                              : "text-white bg-mainTheme hover:bg-mainThemeHover hover:border-mainThemeHover")
                      }>모든 아동</Link>
                <Link href="/children?filter=sponsored"
                      className={
                          "text-lg items-center font-bold rounded-xl py-3 px-5 border-green-500 border-2 " +
                          (searchParams.filter === "sponsored"
                                  ? "text-green-500 bg-white"
                                  : "text-white bg-green-500 hover:bg-green-600 hover:border-green-600"
                          )}>후원받은 아동</Link>
                <Link href="/children?filter=unsponsored"
                      className={"text-lg items-center font-bold rounded-xl py-3 px-5 border-yellow-500 border-2 " +
                          (searchParams.filter === "unsponsored"
                              ? "text-yellow-500 bg-white"
                              : "text-white bg-yellow-500 hover:border-yellow-600 hover:bg-yellow-600")}>후원이
                    필요한 아동</Link>
            </div>
            <div className="flex w-full justify-end">
                <div className={"lg:w-2/5 w-full"}>
                    <ChildrenSearchbar />
                </div>
            </div>
            <SearchResult searchType={searchParams.searchType} keyword={searchParams.keyword}
                          filter={searchParams.filter}/>
        </div>
    );
}