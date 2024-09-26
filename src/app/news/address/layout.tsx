import Script from 'next/script'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`}
                strategy="beforeInteractive"
                />
        {children}
        </>
)
}