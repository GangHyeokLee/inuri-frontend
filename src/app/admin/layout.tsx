import {PropsWithChildren} from "react";
import Link from "next/link";
import {
    Drawer,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle
} from "@/components/ui/drawer";

export default function Layout({children}: PropsWithChildren) {

    return (
        <section className="py-5 flex lg:flex-row flex-col w-4/5 mx-auto">
            <div className="xl:w-1/4 pe-4 pb-3 whitespace-nowrap flex lg:flex-col">
                <h3 className="text-mainTheme text-4xl font-extrabold lg:mb-5 lg:block hidden">ADMIN</h3>

                {/* lg 이상에서는 보이고, 이하에서는 숨김 */}
                <div className="hidden lg:block w-fit">
                    <Link href="/admin"
                          className="block py-2 pr-5 text-mainTheme font-bold hover:bg-gray-200 rounded cursor-pointer">
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

                {/* lg 이하에서는 드로어 버튼과 Admin 텍스트가 가로로 배치 */}
                <div className="lg:hidden w-full flex justify-between items-center mt-5">
                    <h3 className="text-mainTheme text-2xl font-extrabold">ADMIN</h3>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <button className="py-2 px-4 text-mainTheme font-bold bg-gray-200 rounded cursor-pointer">
                                메뉴
                            </button>
                        </DrawerTrigger>

                        {/* 드로어 메뉴 */}
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>ADMIN MENU</DrawerTitle>
                            </DrawerHeader>
                            <div className="p-4">
                                <Link href="/admin"
                                      className="block py-2 pr-5 text-mainTheme font-bold hover:bg-gray-200 rounded cursor-pointer">
                                    Dashboard
                                </Link>
                                <Link href="/admin/children"
                                      className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                                    후원 아동 관리
                                </Link>
                                <Link href="/admin/patrons"
                                      className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                                    후원자 관리
                                </Link>
                                <Link href="/admin/donations"
                                      className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                                    후원 관리
                                </Link>
                                <Link href="/admin/faq"
                                      className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                                    FAQ 관리
                                </Link>
                                <Link href="/admin/qalist"
                                      className="block py-2 pr-5 hover:bg-gray-200 rounded cursor-pointer">
                                    1:1문의
                                </Link>
                            </div>
                            <DrawerFooter>
                                <DrawerClose className="block py-2 pr-5 font-bold text-red-600 rounded cursor-pointer">
                                    닫기
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>

            <div className="w-full lg:w-3/4">
                {children} {/* Ensure children are in a separate column */}
            </div>
        </section>
    );
}