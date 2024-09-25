import {PropsWithChildren} from "react";
import Link from "next/link";

export default function layout({children}: PropsWithChildren) {

    return (
        <>
            <div className="relative page-header py-5 pb-8 bg-[url('/child/hero-img.jpg')] z-1 bg-center bg-cover bg-no-repeat mb-5">
                <div className="absolute inset-0 bg-black opacity-50 z-2"></div>
                <h1 className="relative text-center text-white text-4xl font-semibold z-20">기업 정보</h1>
                <div className="relative flex gap-5 justify-center mt-5 z-20">
                    <Link href="/news" className="text-mainTheme hover:text-gray-300 z-20">공지사항</Link>
                    <p className="text-white">/</p>
                    <Link href="/news/info" className="text-mainTheme hover:text-gray-300 z-20">소식</Link>
                    <p className="text-white">/</p>
                    <Link href="/news/assist" className="text-mainTheme hover:text-gray-300 z-20">고객지원</Link>
                    <p className="text-white">/</p>
                    <Link href="/news/address" className="text-mainTheme hover:text-gray-300 z-20">찾아오시는 길</Link>
                </div>
            </div>
            {children}
        </>
    );
}