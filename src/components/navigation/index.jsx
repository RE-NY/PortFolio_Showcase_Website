"use client"
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
    const angleIncrement = 360/BtnList.length;

    return (
        <div className='w-full fixed h-screen flex items-center justify-center'>
            <div className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group'>
                {
                    BtnList.map((btn, index) => {

                        const angleRadian = (index*angleIncrement*Math.PI)/180
                        const radius = 'calc(20vw - 1rem)'

                        const absicca = `calc(${radius} * ${Math.cos(angleRadian)})`;
                        const ordinate = `calc(${radius} * ${Math.sin(angleRadian)})`;

                        // console.log(index, angleRadian, radius, absicca, ordinate)

                        return <NavButton key = {btn.label} x = {absicca} y = {ordinate} {...btn}/>
                        
                    })
                }
            </div>
        </div>
    )
}

export default Navigation