import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroBtn, HeroH1, HeroItems, HeroP } from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Las mejores hamburguesas</HeroH1>
                    <HeroP>Salen enseguida</HeroP>
                    <HeroBtn>Ordena Aqui</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
