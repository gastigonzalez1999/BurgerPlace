import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarRoute, SidebarMenu, SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Burgers</SidebarLink>
                <SidebarLink to="/">Combos</SidebarLink>
                <SidebarLink to="/">Carrito</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Ordena ya</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
