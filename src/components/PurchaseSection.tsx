import React, { useEffect, useState } from 'react'
import './../styles/purchase.css'
import TicketCreation from './TicketCreation'
import { RxCross2 } from "react-icons/rx";
import {  ModPack } from '../../config/config';

type Props = {
    setActiveVar: React.Dispatch<React.SetStateAction<boolean>>,
    ActiveVar: boolean,
    Mod: ModPack | null;
}

const PurchaseSection: React.FC<Props> = ({ setActiveVar, ActiveVar, Mod }) => {
    const ForwardToHowtoBuy = () => { window.location.href = "/howtobuy" }
    const ForwardToDiscordServer = () => { window.open("https://discord.com/invite/dMzNNVuYv7"); }
    const ForwardToDiscordChannel = () => { window.open("https://discord.gg/dMzNNVuYv7"); }
    if (!ActiveVar) {
        return <></>
    }
    if (Mod == null) {
        return <>
            <div className="PurchaseParent">
                <h1 className='red'>Failed To Load Mod Details</h1>
                <button className='purchaseCloseBtn' onClick={() => { setActiveVar(false) }}><span className='closeT'>Close</span><span className='closeI'><RxCross2 /></span></button>
            </div>
        </>
    }
    let res = Math.floor((Mod.Price * 100) / (100 - Mod.Discount));
    return (
        <>
            <button className='purchaseCloseBtn' onClick={() => { setActiveVar(false) }}><span className='closeT'>Close</span><span className='closeI'><RxCross2 /></span></button>
            <div className="PurchaseParent">
                <TicketCreation className='toggler' />
                <div className="order-details">
                    <div className="order-title">Pack Details</div>
                    <div className="pack-details">
                        <img src={Mod.thumbnail} alt="Thumbnail" className='packThumbnail' />
                        <div className="packName">
                            <span className='detailTitle'>Mod Name:</span>
                            <span>{Mod.name}</span>
                        </div>
                        <div className="packPrice">
                            <span className='detailTitle'>Mod Price:</span>
                            <span className='detailPriceBlock'>
                                {Mod.isDiscounted ? <span className='discountBlock'>
                                        <div className='discountSection'>-{Mod.Discount}%</div>
                                        <div className='priceDisplay'>
                                            <div className='strike'>${res} USD</div>
                                            <div className='price'>${Mod.Price} USD</div>
                                        </div>
                                    </span> 
                                : <>${Mod.Price} USD</>} 
                            </span>
                        </div>
                        {
                            Mod.description ?
                                <div className="packdesc">
                                    <div className="detailTitle">Mod Description</div>
                                    <div className="detailDescBlock">{Mod.description}</div>
                                </div>
                                :<></>
                        }
                    </div>
                    <div className="order-btns">
                        <button className="order-btn buy-btn" id="how-to-buy-btn" onClick={ForwardToHowtoBuy}><span>How to Buy</span></button>
                        <button className="order-btn" id="server-btn" onClick={ForwardToDiscordServer}>Join Server </button>
                        <button className="order-btn" id="channel-btn" onClick={ForwardToDiscordChannel}> <span className="red">Buy Now</span>&nbsp; (Open <span className='dctag'>#create-ticket</span> channel) </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchaseSection