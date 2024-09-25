import {PropsWithChildren} from "react";
import Link from "next/link";

export default function Layout({children}: PropsWithChildren) {

    return (
        <section className="py-5 flex w-full mx-auto">
            <div className="xl:w-1/4 pe-4 pb-3 whitespace-nowrap">
                <h3 className="text-mainTheme text-4xl font-extrabold">ADMIN</h3>
                <div className="w-fit mt-5">
                    <Link href="/admin" className="block py-2 pr-5 text-mainTheme font-bold hover:bg-gray-200 rounded cursor-pointer">
                        Dashboard
                    </Link>
                    <Link href="/admin/children" className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                        후원 아동 관리
                    </Link>
                    <Link href="/admin/patrons" className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                        후원자 관리
                    </Link>
                    <Link href="/admin/donations" className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                        후원 관리
                    </Link>
                    <Link href="/admin/faq" className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                        FAQ 관리
                    </Link>
                    <Link href="/admin/qalist" className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                        1:1문의
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-3/4">
                {children} {/* Ensure children are in a separate column */}
            </div>
        </section>
    );
}