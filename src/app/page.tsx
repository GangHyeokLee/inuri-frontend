"use client"

import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {FaCarSide, FaUserShield} from "react-icons/fa6";
import {FaExchangeAlt, FaPhoneAlt} from "react-icons/fa";
import Link from "next/link";
import MainCard from "@/components/main/MainCard";

const carouselImages = [
    "/child/r1.png", "/child/r2.png"
]

export default function Home() {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full p-5 bg-[url('/child/hero-img.jpg')] bg-cover bg-center ">
                <div className="flex flex-col lg:flex-row gap-5 items-center">
                    <div className="flex flex-1 justify-center">
                        <div className="text-left w-fit mx-auto">
                            <h4 className="mb-3 text-xl font-bold text-[#ffb524]">아동후원, 아이누리와 함께하세요.</h4>
                            <h1 className="mb-3 text-10xl font-extrabold md:text-5xl text-mainTheme">당신의 후원이</h1>
                            <h1 className="text-10xl font-extrabold md:text-5xl text-mainTheme">세상을 바꿉니다.</h1>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Carousel className="w-full max-w-2xl"
                                  opts={{loop: true}}
                                  plugins={[
                                      Autoplay({
                                          delay: 2000,
                                      })
                                  ]}
                        >
                            <CarouselContent>
                                {carouselImages.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-12 h-4/5">
                                            <img src={img}
                                                 className="img-fluid h-auto bg-[#ffb524] rounded-xl"
                                                 alt="First slide"/>
                                        </div>
                                    </CarouselItem>
                                ))}

                            </CarouselContent>
                            {/*<CarouselPrevious/>*/}
                            {/*<CarouselNext/>*/}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="my-20 flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-fit">
                    <MainCard title={"찾아오시는 길"} content={"대구 산격동 대학로80"}>
                        <FaCarSide className="text-white text-6xl"/>
                    </MainCard>
                    <MainCard title={"청렴한 후원"} content={"후원금의 100% 전달"}>
                        <FaUserShield className="text-white text-6xl"/>
                    </MainCard>
                    <MainCard title={"친밀한 소통"} content={"아이들과 좋은 교류를 나누세요"}>
                        <FaExchangeAlt className="text-white text-6xl"/>
                    </MainCard>
                    <MainCard title={"전화 (9:00-16:00)"} content={"070-0000-0000"}>
                        <FaPhoneAlt className="text-white text-6xl"/>
                    </MainCard>
                </div>
            </div>
            <div
                className="my-5 bg-carrot flex justify-center p-20 flex-col xl:flex-row xl:items-center items-start gap-10">
                <div className="lg:w-1/2 py-4">
                    <h1 className="text-white text-6xl whitespace-nowrap font-extrabold mb-3">아이누리와
                        함께하는</h1>
                    <p className="text-gray-500 text-5xl font-medium mb-4">민아 이야기</p>
                    <p className="text-gray-500 my-10 whitespace-nowrap">집에서 홀로 밥을 해먹어야하는 민아에게 적절한 영양식을
                        제공해주세요.</p>
                    <Link href={"/children"}
                          className="btn border-2 border-white rounded-full text-bold text-gray-500 py-5 px-8">
                        후원하기
                    </Link>
                </div>
                <div className="lg:w-1/2">
                    <div className="relative">
                        <img src="/child/banner.png" className="img-fluid w-full rounded" alt=""/>
                        <div className="flex items-center justify-center bg-white rounded-full absolute"
                             style={{width: '140px', height: '140px', top: '0', left: '0'}}>
                            <h1 className="text-gray-600 text-[100px] font-bold">d</h1>
                            <div className="flex flex-col">
                                <span className="text-gray-600 font-bold text-3xl mb-0">민아</span>
                                <span className="text-2xl font-semibold text-grayp-400 mb-0">8세</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
