import React from "react";
import Slider from "./components/Slider";
import CardSection from "./components/CardSection";
import ParallaxSection from "./components/ParallaxSection";
import TextSection from "./components/TextSection";



export const Home = () => {
    return (
        <>
            <Slider />
            <CardSection />
            <ParallaxSection />
            <TextSection />
        </>
    )
}