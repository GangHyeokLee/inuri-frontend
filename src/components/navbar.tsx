"use client"
// 쿠키 유무에 따라 버튼 모양 달라야함

import {IoPersonSharp} from "react-icons/io5";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink, NavigationMenuList
} from "@/components/ui/navigation-menu";
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react";
import {cn} from "@/lib/utils";
import {GiHamburgerMenu} from "react-icons/gi";
import Link from "next/link";
import LoginForm from "@/components/authen/LoginForm";
import RegisterForm from "@/components/authen/RegisterForm";

export default function Navbar() {

    return (
        <nav className="fixed h-1/5 flex flex-col top-0 w-full z-50">
            <div
                className="hidden mx-auto lg:flex w-4/5 justify-center bg-mainTheme text-white p-2 rounded-tl-3xl rounded-bl-xl rounded-tr-xl rounded-br-3xl">
                <div className="flex items-center space-x-2">
                    <a href="#" className="text-white">
                        <small className="mx-2">Privacy Policy</small>
                    </a>
                    <span>/</span>
                    <a href="#" className="text-white">
                        <small className="mx-2">Terms of Use</small>
                    </a>
                </div>
                <div className="flex items-center space-x-2 ml-auto">

                    <LoginForm/>
                    <RegisterForm/>
                    <a href="#" className="text-white">
                        <small className="mx-2">로그아웃</small>
                    </a>
                </div>
            </div>
            <nav className="bg-white w-4/5 h-fit mx-auto">
                <div className="flex items-center justify-between h-fit">
                    <Link className="flex justify-center w-1/5 h-full" href="/">
                        <img
                            src="/logo_inuri.png"
                            alt="INURI"
                            className="w-full h-auto cursor-pointer"
                        />
                    </Link>
                    <NavigationMenu className="lg:hidden flex items-center justify-center p-2">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-mainTheme">
                                    <GiHamburgerMenu className="text-mainTheme text-3xl"/>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="text-mainTheme">
                                    <ul className="flex flex-col whitespace-nowrap w-fit gap-3 p-4 ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            />
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden lg:flex flex-grow bg-white items-center" id="navbarCollapse">
                        <div className="mx-auto flex gap-12 text-xl text-primary">
                            <Link href="/children" className="nav-item nav-link text-gray-700 hover:text-primary">
                                후원 아동</Link>
                            <Link href="/news" className="nav-item nav-link text-gray-700 hover:text-primary">소식</Link>
                            <Link href="/admin"
                                  className="nav-item nav-link text-gray-700 hover:text-primary">관리자</Link>
                        </div>
                        <div className="flex items-center m-3 ml-auto">
                            <a href="#" className="flex items-center">
                                <IoPersonSharp className="text-mainTheme text-5xl"/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

const components: { title: string; href: string; }[] = [
    {
        title: "후원 아동",
        href: "/children",
    },
    {
        title: "소식",
        href: "/news",
    },
    {
        title: "관리자",
        href: "/admin",
    },
]

const ListItem = forwardRef<
    ElementRef<"a">,
    ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

