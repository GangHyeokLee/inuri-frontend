import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
    title: string;
    content: string;
}

export default function MainCard({children, title, content}: Props) {
    return (
        <div className="text-center rounded-xl bg-secondary p-4 flex flex-col items-center">
            <div className="relative w-[7.5rem] h-[7.5rem] bg-carrot rounded-full flex items-center justify-center">
                {children}
                <div
                    className="after:content-[''] after:w-[2.1875rem] after:h-[2.1875rem] after:bg-carrot after:absolute after:bottom-[-0.625rem] after:left-1/2 after:transform after:-translate-x-1/2 after:rotate-45">
                </div>
            </div>
            <div className="text-center mt-8">
                <h5 className="text-lg font-semibold">{title}</h5>
                <p className="mb-0">{content}</p>
            </div>
        </div>
    )
}