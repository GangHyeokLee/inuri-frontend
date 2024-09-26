import {TableCell, TableRow} from "@/components/ui/table";
import {MockNews} from "@/mock";
import NewsLayout from "@/components/news/NewsLayout";

import {notFound} from 'next/navigation';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateStaticParams() {
    return [
        {newsType: 'notices'},
        {newsType: 'info'},
        {newsType: 'assist'},
    ];
}

type NewsType = 'notices' | 'info' | 'assist';

const newsTypeName = {
    notices: "공지사항",
    info: "소식",
    assist: "고객지원"
}

export default function NewsList({params}: { params: Params }) {

    const {newsType} = params;

    // If the newsType is not in the static params, show a 404 page
    if (!Object.keys(newsTypeName).includes(newsType)) {
        notFound(); // This will trigger the 404 page
    }


    const newsList = [...MockNews];

    return (<NewsLayout title={newsTypeName[newsType as NewsType]}    categories = {[{name: "공지사항", link: "#"}]} >
        {
            newsList.map((news) => (
                <TableRow key={news.nid}>
                    <TableCell className="text-center">{news.nid}</TableCell>
                    <TableCell className="text-center">{news.ntitle}</TableCell>
                    <TableCell className="text-center">{news.ndate.toLocaleDateString()}</TableCell>
                </TableRow>
            ))
        }
</NewsLayout>
)
    ;
}