import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoOpenOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import Config from '../config/config';

type Props = {
    active: string,
}

const NavBar: React.FC<Props> = ({ active }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [closeAnimate, setCloseAnimate] = useState(false);


    const navigate = useNavigate();
    const handleOpenClose = async () => {
        if (isMenuOpen)
        {
            setCloseAnimate(true);
            await new Promise(r=>setTimeout(r, 500));
            setCloseAnimate(false);
            setIsMenuOpen(false);
        }
        else{
            setIsMenuOpen(true);
        }
    }

    return (
        <div className='z-[199] fixed top-0 left-0 w-full h-[11%] shadow-2xl flex justify-around items-center bg-nav-background'>
            <div className={`
                flex items-center justify-center h-full w-full
                lg:w-fit
            `}>
                <img src={Config.WebsiteLogo} alt='LGI MODz Logo' className='max-h-[80%] lg:max-h-full max-w-[70%]' onClick={() => { navigate("/") }} />
            </div>
            <div className="z-[13] absolute right-[5svw] text-2xl lg:hidden" onClick={handleOpenClose}>
                {
                    isMenuOpen ?
                        <RxCross2 />
                        :
                        <RiMenu3Fill />
                }
            </div>
            <div className={`
                    hidden animate-slideinright data-[out=true]:animate-slideoutleft w-2/3 h-full z-10 fixed top-0 right-0 data-[active=true]:flex flex-col items-end justify-center gap-4 bg-nav-background shadow-[0_-10px_15px_1px_black]
                    lg:flex lg:animate-none lg:flex-row lg:justify-end lg:static lg:shadow-none lg:items-center lg:w-[60%] lg:gap-1
                    xl:w-1/2 2xl:w-[40%]
                `} data-active={isMenuOpen} data-out={closeAnimate}>
                
                {
                    Config.Navbar.map((n, i)=><a key={i} onClick={() => navigate(n.slug)} className='w-full'>
                    <button className={`
                        cursor-pointer w-full py-4 text-offwhite border-t-1 border-b-1 border-secondary data-[active=true]:bg-primary
                        lg:rounded-lg lg:border-0 lg:py-2 lg:max-w-[150px] font-Jost
                    `} data-active={active == n.slug.slice(1)}>
                        {n.label}
                    </button>
                </a>)
                }
                
                <a href={Config.discordServerLink} target='blank'className='w-full'>
                    <button data-active={active == "Discord"} className={`
                        cursor-pointer w-full py-4 flex items-center justify-center gap-2 text-black bg-offwhite
                        lg:rounded-lg lg:py-2 font-Jost
                    `}>
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