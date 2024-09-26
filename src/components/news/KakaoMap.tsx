"use client"

import {Map, MapMarker} from "react-kakao-maps-sdk";
import React from "react";
import useKakaoLoader from "./use-kakao-loader";

export default function KakaoMap() {
    useKakaoLoader();
    return (
        <>

            <Map center={{lat: 35.8915327, lng: 128.6135036}}
                 style={{width: '100%', height: 400}}
                 level={3}
            >
                <MapMarker position={{lat: 35.8915327, lng: 128.6135036}}>
                </MapMarker>
            </Map></>
    )
}