import {PropsWithChildren} from "react";

interface Type extends PropsWithChildren {
    title: string;
    count: string;
}

export default function DashboardCard({children, title, count}: Type) {
    return (
        <div className="w-full sm:w-1/2 bg-gray-100 rounded flex gap-5 items-center justify-between p-4 whitespace-nowrap">
                {children}
                <div className="ml-3">
                    <p className="mb-2">{title}</p>
                    <h6 className="mb-0 font-bold text-right">{count}</h6>
                </div>
        </div>
    );
}