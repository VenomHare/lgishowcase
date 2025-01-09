import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const PopupImageParent = styled.div`
    position: fixed;
    transform: translate(-50%);
    top: 5svh;
    left: 50%;
    /* width: 1300px; */
    height: 76%;
    background: #17191f;
    box-shadow: 0 0 20px 10px #0077ff;
    z-index: 99999;
    border-radius: 1rem;
    padding: 2svh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 764px) {
        top: 10svh;
        width: 85svw;
        height: auto;
    }
`
const PopupImageObj = styled.img`
    /* width:98%; */
    border-radius:.5rem;
    height: 90%;
    object-fit: cover;
    
    @media (max-width: 764px) {
        width: 90svw;
        height: auto;
    }
`

const ClosePopup = styled.button`
    font-size: 1.2rem;
    padding: .5rem;
    border: 2px solid white;
    border-radius: 5px;
    background: #7a0505;
    width: 35%;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
    &:active{
        border: 2px solid white;
        scale: 0.97;
    }
`

const PopupImage: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <PopupImageParent>
            <PopupImageObj src={'https://res.cloudinary.com/dzgbkv34a/image/upload/v1736444252/Coupon_uqqtek.png'} />
            <ClosePopup onClick={() => { sessionStorage.setItem("popupview", "true"); window.location.reload() }}>Close</ClosePopup>
        </PopupImageParent>
    )
}

export default PopupImage