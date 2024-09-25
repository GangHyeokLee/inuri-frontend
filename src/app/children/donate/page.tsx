"use client"

import {ChangeEvent, useEffect, useState} from "react";
import {initializeIamport} from "@/utils/import";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Customer} from "@/types/type";
import {MockPatron} from "@/mock";
import {RequestPayResponse} from "@/types/paymentType";

// 유저정보 입력받기
// 쿼리로 뭐 흠 그 아동 정볼르 받아야할 것 같은데


export default function Donation() {
    const [donationType, setDonationType] = useState<'regular' | 'onetime'>('regular');
    const [donationField, setDonationField] = useState('');
    const [customAmount, setCustomAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(0);
    const [user, setUser] = useState<Customer>();

    useEffect(() => {
        setUser(MockPatron[0]);
    }, []);

    const handleFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDonationField(e.target.value);
    };

    const handleTotalAmountChange = (amount: number | 'custom') => {
        setSelectedAmount(amount);
        if (amount === 'custom') {
            setTotalAmount(customAmount);
        } else {
            setCustomAmount(0);
            setTotalAmount(amount);
        }
    }

    const requestpay = () => {

        if (donationField === "후원 분야 선택" || "") {
            alert("후원 분야를 선택하세요");
            return;
        }

        const IMP = initializeIamport();
        IMP.request_pay(
            {
                pg: "danal_tpay",
                pay_method: "card",
                merchant_uid: `payment-${crypto.randomUUID()}`, // 주문 고유 번호
                name: "노르웨이 회전 의자",
                amount: totalAmount,
                buyer_email: user?.username,
                buyer_name: user?.name,
                buyer_tel: user?.ctel,
                buyer_addr: user?.caddr,
                buyer_postcode: user?.postcode,
            },
            function (response: RequestPayResponse) {
                const {success, error_msg} = response;
                if (success) {
                    alert("결제 성공");
                } else {
                    alert(`결제 실패: ${error_msg}`);
                }

                console.log(response.imp_uid);
                // 결제 종료 시 호출되는 콜백 함수
                // response.imp_uid 값으로 결제 단건조회 API를 호출하여 결제 결과를 확인하고,
                // 결제 결과를 처리하는 로직을 작성합니다.
            },
        );
    }

    return (
        <div className="container mx-auto py-5">
            <div className="text-center">
                <h2 className="text-2xl font-bold">후원 방법</h2>
            </div>
            <div className="flex justify-center mt-4 gap-4">
                <Button className={`px-4 py-2 ${donationType === 'regular'
                    ? 'bg-mainTheme text-white hover:bg-mainThemeHover'
                    : 'bg-white text-mainTheme border-mainTheme hover:bg-mainThemeHover hover:text-white'}`}
                        onClick={() => setDonationType('regular')}
                > 정기 후원 </Button>
                <Button className={`px-4 py-2 ${donationType === 'onetime'
                    ? 'bg-mainTheme text-white hover:bg-mainThemeHover'
                    : 'bg-white text-mainTheme border-mainTheme hover:bg-mainThemeHover hover:text-white'}`}
                        onClick={() => setDonationType('onetime')}
                > 일시 후원 </Button>
            </div>

            <hr className="w-1/2 mx-auto my-5"/>
            <div className="text-center">
                <h2 className="text-2xl font-bold">후원 분야</h2>
            </div>
            <div className="flex justify-center mt-4">
                <select className="w-1/3 p-2 border rounded-md" value={donationField} onChange={handleFieldChange}>
                    <option value="" disabled>후원 분야 선택</option>
                    <option value="세계 어린이 돕기">세계 어린이 돕기</option>
                    <option value="난민 어린이 돕기">난민 어린이 돕기</option>
                    <option value="긴급구호(수단 기근 피해 어린이 돕기)">긴급구호(수단 기근 피해 어린이 돕기)</option>
                </select>
            </div>

            <hr className="w-1/2 mx-auto my-5"/>
            <div className="container">
                {/* 후원 금액 선택 */}
                <h2 className="text-center font-bold">후원 금액</h2>
                <RadioGroup className="mb-4 text-center flex gap-5 justify-center">
                    {(donationType === 'regular' ? [30000, 50000, 100000] : [50000, 100000, 200000]).map((amount) => (
                        <div key={amount} className="flex items-center space-x-2">
                            <RadioGroupItem
                                id={`donation${amount}`}
                                value={amount + ""}
                                onClick={() => handleTotalAmountChange(amount)}
                            />
                            <label className="btn btn-outline-primary" htmlFor={`donation${amount}`}>
                                {amount.toLocaleString()} 원
                            </label>
                        </div>
                    ))}
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            id="customDonation"
                            value="custom"
                            onClick={() => handleTotalAmountChange('custom')}
                        />
                        <label className="btn btn-outline-primary" htmlFor="customDonation">
                            직접 입력
                        </label>
                    </div>
                </RadioGroup>

                {/* 직접 입력 필드 */}
                {selectedAmount === 'custom' && (
                    <div id="customAmountField" className="w-1/2 mx-auto mb-4">
                        <Input
                            type="number"
                            className="form-control"
                            placeholder="금액 입력"
                            value={customAmount.toString()}
                            onChange={(e) => {
                                setCustomAmount(parseInt(e.target.value) || 0)
                                setTotalAmount(parseInt(e.target.value) || 0)
                            }}
                        />
                    </div>
                )}

                {/* 총 후원 금액 */}
                <h3 className="text-center">총 후원 금액: {totalAmount.toLocaleString()} 원</h3>

                {/* 결제 요청 버튼 */}
                <div className="text-center">
                    <button type="button" className="btn btn-secondary mt-4"
                            onClick={() => alert(`후원금: ${totalAmount} 원`)}>
                        다음
                    </button>
                </div>
            </div>

            <hr className="w-1/2 mx-auto my-5"/>

            <div className="flex justify-center">
                <button
                    type="button"
                    className="px-6 py-2 bg-gray-500 text-white rounded-md mt-4"
                    onClick={requestpay}
                >
                    다음
                </button>
            </div>
        </div>
    )

};