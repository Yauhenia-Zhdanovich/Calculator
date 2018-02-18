import React from 'react';
import styled from "styled-components";

const NiceFooter = styled.footer`
    text-align:center;
    height:60px;
    color:#fcfcfc;
    font-size:1.5rem;
    font-family:'Shadows Into Light',sans-serif;
`;
const Link = styled.a`
    text-decoration:none;
    letter-spacing:0.2rem;
    color:#fcfcfc;
    font-size:1.7rem;
    &:hover{
        color:#eeba30;
    }
`;
//background:#ae0001;
let Footer = ()=>{
    return (
        <NiceFooter>created by <Link href='#'>&#60;Euhenia Zhdanovich&#62;</Link></NiceFooter>
    )
}

export default Footer;