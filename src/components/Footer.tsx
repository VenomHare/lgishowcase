import { AiOutlineYoutube, AiOutlineDiscord } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { TbBrandPaypal } from "react-icons/tb";
import Config from '../config/config';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='w-screen flex flex-col items-center p-10 mt-10 bg-nav-background shadow-[0_0_10px_2px] shadow-black ' id='footer'>
            <div className='w-full flex flex-col-reverse lg:flex-row justify-around gap-10'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:items-center lg:max-w-[60svw] lg:w-fit justify-items-center'>
                    {
                        Config.FooterImgs.map((image, i) =>
                            <img src={image.src} alt={image.alt} key={i} className='max-w-[30svw] md:max-w-[15svw] lg:max-w-[10svw] xl:max-w-[7.5svw] h-auto' />
                        )
                    }
                </div>
                <div className='flex flex-col items-center text-xl font-semibold font-Funnel'>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-4xl font-bold text-primary font-Jost text-shadow-xs text-shadow-red-600/50'>Socials</h5>
                        <a href={Config.footerSocials.youtube} target='blank' className='flex items-center gap-3 text-shadow-lg text-shadow-gray-700 text-offwhite'><AiOutlineYoutube size={30} color='red' />Youtube</a>
                        <a href={Config.footerSocials.instagram} target='blank' className='flex items-center gap-3 text-shadow-lg text-shadow-gray-700 text-offwhite'><FaInstagram size={30} color='red' />Instagram</a>
                        <a href={Config.footerSocials.paypal} target='blank' className='flex items-center gap-3 text-shadow-lg text-shadow-gray-700 text-offwhite'><TbBrandPaypal size={30} color='red' />Paypal</a>
                        <a href={Config.footerSocials.discord} target='blank' className='flex items-center gap-3 text-shadow-lg text-shadow-gray-700 text-offwhite'><AiOutlineDiscord size={30} color='red' />Discord</a>
                    </div>
                </div>
            </div>
            <div className='text-lg font-semibold text-offwhite mt-10 group cursor-pointer' onClick={()=>{navigate("/policies")}}>
                &copy;<span className='font-bold'>2025 LGI Modz</span>. All rights reserved. <span className='group-hover:underline group-hover:text-gray-500'>Read our Piracy & Policy page for more details.</span>
            </div>
        </footer>
    )
}

export default Footer