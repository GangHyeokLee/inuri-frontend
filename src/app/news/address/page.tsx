import KakaoMap from "@/components/news/KakaoMap";
import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import Link from "next/link";

export default function Address() {
    return (
        <div className="container py-5">
            <p className="mb-6"> 기업정보 &gt; <a href="/news/address">찾아오시는 길</a></p>
            <div className="p-5 bg-gray-100 rounded flex flex-col">
                <div className="text-center mx-auto" style={{maxWidth: '700px'}}>
                    <h1 className="text-mainTheme text-6xl mb-6 font-extrabold">찾아오시는 길</h1>
                    <p className="mb-4">
                        대구 북구 산격동{' '}
                        <a href="https://map.kakao.com/link/to/아이누리,35.8915327,128.6135036"
                           className="text-blue-500 hover:underline">
                            대학로 80 정보전산원
                        </a>
                    </p>
                </div>
                <KakaoMap/>

                <div className="flex w-full gap-5 justify-between">
                    <div className="w-2/3">
                        <div className="flex p-4 rounded mb-4 bg-white items-start gap-4">
                            <FaMapMarkerAlt className="text-mainTheme text-5xl"/>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-3xl">주소</h4>
                                <p className="mb-2 text-gray-600">대구 북구 산격동 대학로 80 정보전산원</p>
                            </div>
                        </div>
                        <div className="flex p-4 rounded mb-4 bg-white items-start gap-4">
                            <FaEnvelope className="text-mainTheme text-5xl"/>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-3xl">이메일</h4>
                                <p className="mb-2 text-gray-600">infomation@inuri.com</p>
                            </div>
                        </div>
                        <div className="flex p-4 rounded bg-white items-start gap-4">
                            <FaPhoneAlt className="text-mainTheme text-5xl"/>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-3xl">고객센터</h4>
                                <p className="mb-2 text-gray-600">(+012) 3456 7890</p>
                            </div>
                        </div>
                    </div>

                    {/* Advertisement */}
                    <div>
                        <Link href="/children">
                            <img
                                src="/child/ad.png"
                                className="img-fluid rounded"
                                alt="Ad"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}