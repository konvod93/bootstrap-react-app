import React from "react";
import { Parallax, Background } from 'react-parallax';
import Container from "react-bootstrap/Container";
import ocean4 from "../img/ocean4.jpg";
import styled from 'styled-components';

// const Styles = styled.div`
// .overlay {
//     background-color: #000;
//     opacity: 0.6;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;

// }
//  `


const ParallaxSection = () => (
    <>
        <Parallax
            blur={{ min: -1, max: 6 }}
            bgImage={ocean4}
            bgImageAlt="ocean-4" strength={500}
            renderLayer={presentage => (
                <div
                    style={{
                        background: '#000',
                        opacity: '0.6',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                    }}
                ></div>
            )}
        >
            <div style={{ height: 400 }}>
                <div style={{ color: '#efefef', paddingTop: 30 }} className="container">
                    <h1>Web Developer Blog</h1>
                    <p>Aute commodo pariatur quis mollit nostrud velit officia ut enim eu
                        elit amet sed voluptate irure incididunt do. in amet tempor exercitation
                        adipiscing nostrud adipiscing tempor et voluptate cillum ex sunt voluptate
                        occaecat nostrud. tempor dolor nulla deserunt sunt sint eu veniam qui
                        do aliquip tempor enim incididunt nulla ut anim. cupidatat consectetur
                        do mollit ex incididunt reprehenderit veniam non in consequat nulla ea
                        mollit laboris cupidatat sed ea reprehenderit. culpa tempor veniam culpa
                        mollit Duis aliquip fugiat Excepteur cupidatat do lorem ex proident
                        ipsum sed et. nostrud ut proident esse non irure anim non proident
                        esse laboris laborum eiusmod sunt proident lorem enim. amet proident
                        labore pariatur ad non Excepteur commodo id aliqua aute et lorem
                        cupidatat eiusmod commodo laboris velit.</p>
                </div>
            </div>
        </Parallax >

    </>


);


export default ParallaxSection;