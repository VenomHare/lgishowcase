import './../styles/nav.css'
// import logo from './../assets/Logo_square.png'
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoOpenOutline } from "react-icons/io5";

import { discordServerLink, WebsiteLogo } from '../../config/config';
type Props = {
    active: string,
}
const NavBar : React.FC<Props>= ({active}) => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
    <div className='nav-parent'>
            <div className="titlebox">
                <img src={WebsiteLogo} className='logo' onClick={()=>{window.location.href= "/"}}/>
            </div>
            <div className="menuButton" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {
                    isMenuOpen ?
                    <RxCross2 />
                    :
                    <RiMenu3Fill />
                }
            </div>
            <div className="nav-buttons" data-active={isMenuOpen}>
                <a href="/">
                    <button data-active={active == "home"}>
                        Home
                    </button>
                </a>

                {/* <a href="/roster">
                    <button data-active={active == "roster"}>
                        Roster
                    </button>
                </a> */}

                <a href="/showcase">
                    <button data-active={active == "showcase"}>
                        Showcase
                    </button>
                </a>

                <a href="/free">
                    <button data-active={active == "free"}>
                        Free Zone
                    </button>
                </a>
                <a href="exclusive">
                    <button data-active={active == "exclusive"}>
                        Exclusive Zone
                    </button>
                </a>
                <a href="/policies">
                    <button data-active={active == "policies"}>
                        Privacy Policies
                    </button>
                </a>
                <a href="/community">
                    <button data-active={active == "community"}>
                        Community
                    </button>
                </a>
                <a href={discordServerLink} target='blank'>
                    <button data-active={active == "Discord"} className='discordBtn'>
                        Discord
                        <IoOpenOutline />
                    </button>            

                </a>
                {/* <a href="faq">
                    <button data-active={active == "faq"}>
                        FAQ
                    </button>
                </a> */}
            </div>
        </div>
    )
}

export default NavBar