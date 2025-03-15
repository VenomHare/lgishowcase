import './../styles/nav.css'
// import logo from './../assets/Logo_square.png'
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoOpenOutline } from "react-icons/io5";

import { discordServerLink, WebsiteLogo } from '../../config/config';
import { useNavigate } from 'react-router-dom';
type Props = {
    active: string,
}
const NavBar : React.FC<Props>= ({active}) => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigate = useNavigate();

    return (
    <div className='nav-parent'>
            <div className="titlebox">
                <img src={WebsiteLogo} alt='LGI MODz Logo' className='logo' onClick={()=>{navigate("/")}}/>
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
                <a onClick={() => navigate("/")}>
                    <button data-active={active == "home"}>
                        Home
                    </button>
                </a>
                <a onClick={() => navigate("/showcase")}>
                    <button data-active={active == "showcase"}>
                        Showcase
                    </button>
                </a>

                <a onClick={() => navigate("/mods")}>
                    <button data-active={active == "mods"}>
                        Browse Mods
                    </button>
                </a>
                <a onClick={() => navigate("/patches")}>
                    <button data-active={active == "patches"}>
                        Browse Patches
                    </button>
                </a>
                <a onClick={() => navigate("/community")}>
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