import './../styles/purchase.css'
import TicketCreation from './TicketCreation'
import { RxCross2 } from "react-icons/rx";
import {  CurrencyOptions, discordServerLink, ModPack } from '../../config/config';
import { useEffect, useState } from 'react';

type Props = {
    setActiveVar: React.Dispatch<React.SetStateAction<boolean>>,
    ActiveVar: boolean,
    Mod: ModPack | null;
}

const PurchaseSection: React.FC<Props> = ({ setActiveVar, ActiveVar, Mod }) => {
    
    const ForwardToHowtoBuy = () => { window.location.href = "/howtobuy" }
    const ForwardToDiscordServer = () => { window.open(discordServerLink); }
    const ForwardToDiscordChannel = () => { window.open("https://discord.gg/dMzNNVuYv7"); }
    const ForwardtoLimitedPayment = () => { }
    // const ForwardtoLimitedPayment = () => { window.open("https://lgicheckout.vercel.app/limited"); }

    const [curCurrency, setCurCurrency] = useState<CurrencyOptions|undefined>(Mod?.Price.find(p => p.id =="usd"));

    useEffect(()=>{setCurCurrency(Mod?.Price.find(p => p.id =="usd"))},[Mod])

    const handleChange = (e:React.FormEvent<HTMLSelectElement>)=>{
        const target = e.target as HTMLSelectElement; 
        const data  = Mod?.Price.find(p=>p.id==target.value);
        setCurCurrency(data);
    }
    
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
    let Price = curCurrency?.price || 0;
    let res = Math.floor((Price * 100) / (100 - Mod.Discount));
    return (
        <>
            <button className='purchaseCloseBtn' onClick={() => { setActiveVar(false) }}><span className='closeT'>Close</span><span className='closeI'><RxCross2 /></span></button>
            <div className="PurchaseParent">
                <TicketCreation className='toggler' />
                <div className="order-details">
                    <div className="order-title">Pack Details</div>
                    <div className="pack-details">
                        <img src={Mod.thumbnail} alt="Thumbnail" className='packThumbnail' />
                        <select name="currency" onChange={handleChange} className="currencySelect">
                            {
                                Mod.Price.map((p, index)=><option key={index} value={p.id}>{p.name}</option>)
                            }
                        </select>
                        <div className="packName">
                            <span className='detailTitle'>Mod Name:</span>
                            <span>{Mod.name}</span>
                        </div>
                        <div className="packPrice">
                            <span className='detailTitle'>Mod Price:</span>
                            <span className='detailPriceBlock'>
                                {
                                Mod.isDiscounted ? <span className='discountBlock'>
                                        <div className='discountSection'>-{Mod.Discount}%</div>
                                        <div className='priceDisplay'>
                                            <div className='strike'>{res} {curCurrency?.name}</div>
                                            <div className='price'>{curCurrency?.price} {curCurrency?.name}</div>
                                        </div>
                                    </span> 
                                : <span className='nonDiscount'>{curCurrency?.price} {curCurrency?.name}</span>
                                } 
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
                        <button className="buy-btn" id="how-to-buy-btn" onClick={ForwardToHowtoBuy}><span>How to Open Ticket</span></button>
                        <button className="order-btn" id="server-btn" onClick={ForwardToDiscordServer}>Join Server </button>
                        <button className="buy-btn" id="channel-btn" onClick={Mod.id=="limited"?ForwardtoLimitedPayment:ForwardToDiscordChannel}> <span> Buy Now</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchaseSection