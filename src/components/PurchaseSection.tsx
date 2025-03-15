import './../styles/purchase.css'
import TicketCreation from './TicketCreation'
import { RxCross2 } from "react-icons/rx";
import {  CurrencyOptions, discordServerLink, ModPack } from '../../config/config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';     
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const PurchaseContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
`

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${slideIn} 0.3s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  .closeT {
    font-family: var(--font);
  }

  .closeI {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
`

const OrderDetails = styled.div`
  background: var(--purchase-main-bg);
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  animation: ${fadeIn} 0.3s ease-out;
`

const OrderTitle = styled.div`
  color: var(--purchase-main-text);
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  font-family: var(--font);
`

const PackDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const PackImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin: 0 auto;
`

const CurrencySelect = styled.select`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: var(--purchase-select-bg);
  color: var(--purchase-select-text);
  font-family: var(--font);
  cursor: pointer;
  margin: 0 auto;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--purchase-select-focus);
  }
`

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--purchase-main-text);
  font-family: var(--font);

  .detailTitle {
    font-weight: 600;
    min-width: 120px;
  }
`

const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .discountBlock {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .discountSection {
    background: var(--purchase-discount-bg);
    color: var(--purchase-discount-text);
    padding: 4px 8px;
    border-radius: 4px;
  }

  .priceDisplay {
    display: flex;
    flex-direction: column;
  }

  .strike {
    text-decoration: line-through;
    color: var(--purchase-strike-price);
  }

  .price {
    color: var(--purchase-final-price);
    font-weight: 600;
  }
`

const Description = styled.div`
  color: var(--purchase-main-text);
  font-family: var(--font);
  line-height: 1.6;

  .detailTitle {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-family: var(--font);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &.buy-btn {
    background: var(--purchase-buy-btn-bg);
    color: var(--purchase-buy-btn-text);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
  
  &.order-btn {
    background: var(--purchase-order-btn-bg);
    color: var(--purchase-order-btn-text);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
`

type Props = {
    setActiveVar: React.Dispatch<React.SetStateAction<boolean>>,
    ActiveVar: boolean,
    Mod: ModPack | null;
}

const PurchaseSection: React.FC<Props> = ({ setActiveVar, ActiveVar, Mod }) => {
    
    const navigate = useNavigate();
    const ForwardToHowtoBuy = () => { navigate("/howtobuy") }  
    const ForwardToDiscordServer = () => { window.open(discordServerLink); }
    const ForwardToDiscordChannel = () => { window.open("https://socialwolvez.com/app/l/uiwfZA"); }
    const ForwardtoLimitedPayment = () => { window.open("https://lgicheckout.venomhare.space/checkout/limited"); }

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
            <PurchaseContainer>
                <h1 style={{ color: 'red' }}>Failed To Load Mod Details</h1>
                <CloseButton onClick={() => { setActiveVar(false) }}>
                    <span className='closeT'>Close</span>
                    <span className='closeI'><RxCross2 /></span>
                </CloseButton>
            </PurchaseContainer>
        </>
    } 
    let Price = curCurrency?.price || 0;
    let res = Math.floor((Price * 100) / (100 - Mod.Discount));
    return (
        <>
            <PurchaseContainer>
                <CloseButton onClick={() => { setActiveVar(false) }}>
                    <span className='closeT'>Close</span>
                    <span className='closeI'><RxCross2 /></span>
                </CloseButton>
                <OrderDetails>
                    <TicketCreation className='toggler' />
                    <OrderTitle>Pack Details</OrderTitle>
                    <PackDetails>
                        <PackImage src={Mod.thumbnail} alt="Thumbnail" />
                        <CurrencySelect onChange={handleChange}>
                            {Mod.Price.map((p, index)=><option key={index} value={p.id}>{p.name}</option>)
                            }
                        </CurrencySelect>
                        <DetailRow>
                            <span className='detailTitle'>Mod Name:</span>
                            <span>{Mod.name}</span>
                        </DetailRow>
                        <DetailRow>
                            <span className='detailTitle'>Mod Price:</span>
                            <PriceBlock>
                                {
                                Mod.isDiscounted ? <div className='discountBlock'>
                                        <div className='discountSection'>-{Mod.Discount}%</div>
                                        <div className='priceDisplay'>
                                            <div className='strike'>{res} {curCurrency?.name}</div>
                                            <div className='price'>{curCurrency?.price} {curCurrency?.name}</div>
                                        </div>
                                    </div> 
                                : <span className='nonDiscount'>{curCurrency?.price} {curCurrency?.name}</span>
                                } 
                            </PriceBlock>
                        </DetailRow>
                        {
                            Mod.description ?
                                <Description>
                                    <div className="detailTitle">Mod Description</div>
                                    <div className="detailDescBlock">{Mod.description}</div>
                                </Description>
                                :<></>
                        }
                    </PackDetails>
                    <ButtonGroup>
                        <Button className="buy-btn" id="how-to-buy-btn" onClick={ForwardToHowtoBuy}><span>How to Open Ticket</span></Button>
                        <Button className="order-btn" id="server-btn" onClick={ForwardToDiscordServer}>Join Server </Button>
                        <Button className="buy-btn" id="channel-btn" onClick={Mod.id=="limited"?ForwardtoLimitedPayment:ForwardToDiscordChannel}> <span> Buy Now</span></Button>
                    </ButtonGroup>
                </OrderDetails>
            </PurchaseContainer>
        </>
    )
}

export default PurchaseSection