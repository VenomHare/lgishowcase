import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import NavBar from '../NavBar';
import { CurrencyOptions, ModList, Patches } from '../../../config/config';
import ImageView from '../ImageView';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import RosterBlock from '../RosterBlock';
import RosterLists from '../RosterLists';
import { RxCross1 } from 'react-icons/rx';

const Parent = styled.div`
    height: 89svh;
    width: 100svw;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1200px) {
        flex-direction: column;
        height: fit-content;
    }
`
const NotFoundText = styled.h1`
    width: 100svw;
    height: 89svh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftLayout = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    @media (max-width: 1200px) {
        width: 80%;
        height: fit-content;
    }

    @media (max-width: 648px) {
        width: 100%;
    }
`

const Thumbnail = styled.img`
    width: auto;
    height: 30%;
    border-radius: .5rem;
    margin-top: 2rem;

    @media (max-width: 1200px) {
        width: 30svw;
    }
    @media (max-width: 648px) {
        width: 50%;
    }
`
const PatchTitle = styled.div`
    font-family: var(--font);
    font-size: 2.2rem;
    font-weight: 500;
    margin: 1rem;
`
const BuyBtn = styled.button`
    @media (max-width: 1200px) {
        width: 12svh;
    }
`
const PatchDesc = styled.div`
    font-size: 1rem;
    font-family: var(--font);
    width: 80%;
`
const PatchPricing = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 1rem;
    padding-bottom: 1rem;
`
const PriceBlock = styled.div`
    font-family: var(--font);
    font-size: 1.1rem;
    font-weight: 600;
    @media (max-width: 1200px) {
        width: 25%;
        height: fit-content;
    }
    @media (max-width: 648px) {
        width: 50%;
    }
    @media (max-width: 350px) {
        width: 65%;
    }
`
const PriceSelect = styled.select`
    margin: 0%;
`

const RightLayout = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1200px) {
        width: 80%;
        height: fit-content;
    }

    @media (max-width: 648px) {
        width: 100%;
    }
`

const ShowcaseImgs = styled.div`
    margin-top: 2rem;
    border-radius: 5px;
    width: fit-content;
    border: 1px solid var(--showcase-main-block-border);
`
const RosterBtn = styled.button`
    width: 65%;
    @media (max-width: 1200px) {
        width: 30svw;
    }
    @media (max-width: 648px) {
        width: 50%;
    }
`
const CredsParent = styled.div`
    height: 60svh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1200px) {
        width: 75svh;
    }
`
const PatchList = styled.ul`
    max-height: 90%;
`

const PatchDetails = () => {

    const { patch_id } = useParams();

    const patchData = ModList.find(mod => mod.id === patch_id);
    const credits = Patches.find(pat => pat.id == patch_id);
    const [curCurrency, setCurCurrency] = useState<CurrencyOptions | undefined>(patchData?.Price.find(p => p.id == "usd"));
    const [picture, setPicture] = useState(1);
    const [rosterView, setRosterView] = useState(false);
    const [creditsView, setCreditsView] = useState(false);

    useEffect(() => { setCurCurrency(patchData?.Price.find(p => p.id == "usd")) }, [patchData])
    useEffect(() => {
        console.log(patchData);
    }, [])

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLSelectElement;
        const data = patchData?.Price.find(p => p.id == target.value);
        setCurCurrency(data);
    }
    const ForwardToDiscordChannel = () => { window.open("https://discord.gg/dMzNNVuYv7"); }
    const ForwardtoLimitedPayment = () => { window.open("https://lgicheckout.vercel.app/limited"); }

    let Price = curCurrency?.price || 0;
    let res = Math.floor((Price * 100) / (100 - (patchData?.Discount || 0)));

    return (
        <>
            <>
            {
                creditsView ? <CredsParent className="patchCredits">
                        <div className="patchCredTitle"> {patchData?.name}'s Credits</div>
                        <PatchList className="patchCredNames">
                        {
                            credits?.credits?.length !== 0 ? <>
                                {credits?.credits?.map(name => <><li className="patchCredName">{name}</li></>)}
                            </>:<></>
                        }
                        </PatchList>
                        <div className="patchCredClose" onClick={()=>{setCreditsView(false)}}> Close </div>
                </CredsParent> : <></>
            }
            </>
            <>
            {
                rosterView ?
                    <div className="homeRoster">
                        <div className="closeRoster" onClick={() => { setRosterView(false); }}><RxCross1/></div>
                        <RosterBlock thumbnail={patchData?.thumbnail||""} title={patchData?.name||""}>
                            {
                                patchData?.rosterListPath !== undefined ?
                                    <RosterLists filepath={patchData.rosterListPath} />
                                    : <div>Roster Not Found</div>
                            }
                        </RosterBlock>
                    </div>
                    : <></>
            }
        </>

            <NavBar active='' />
            <Parent>
                {
                    patchData == undefined ? <>
                        <NotFoundText> Patch Not Found</NotFoundText>
                    </>
                        :
                        <>
                            <LeftLayout>
                                <Thumbnail src={patchData.thumbnail} />
                                <PatchTitle>{patchData.name}</PatchTitle>
                                <PatchDesc>
                                    {patchData.description}
                                </PatchDesc>
                                <PatchPricing>
                                    <PriceSelect name="currency" onChange={handleChange} className="currencySelect">
                                        {
                                            patchData.Price.map((p, index) => <option key={index} value={p.id}>{p.name}</option>)
                                        }
                                    </PriceSelect>
                                    {
                                        patchData.isDiscounted ? <PriceBlock className='discountBlock'>
                                            <div className='discountSection'>-{patchData.Discount}%</div>
                                            <div className='priceDisplay'>
                                                <div className='strike'>{res} {curCurrency?.name}</div>
                                                <div className='price'>{curCurrency?.price} {curCurrency?.name}</div>
                                            </div>
                                        </PriceBlock>
                                            : <PriceBlock className='nonDiscount'>{curCurrency?.price} {curCurrency?.name}</PriceBlock>
                                    }
                                </PatchPricing>
                                <BuyBtn className="buy-btn" id="channel-btn" onClick={patchData.id == "limited" ? ForwardtoLimitedPayment : ForwardToDiscordChannel}> <span> Buy Now</span></BuyBtn>
                            </LeftLayout>
                            <RightLayout>
                                <ShowcaseImgs>
                                    <div className="img-container" data-thumbnail={true}>
                                        {
                                            patchData.showcaseImgs.map((str, index) => (
                                                <ImageView imageURL={str} key={`Image${index}`} alt={`image ${index}`} classname={`slideitem ${picture == index + 1 ? "show" : "hide"}`} />
                                            ))
                                        }
                                        <div className="image-scroller">
                                            {
                                                patchData.showcaseImgs.map((img, index) => <>
                                                    <div className={"scrollerItem"} data-active={(picture == index + 1)} onClick={() => setPicture(index + 1)} style={{ background: `url("${img}")` }}>{picture == index + 1 ? <><MdOutlineRemoveRedEye /></> : <></>}</div>
                                                </>)
                                            }
                                        </div>
                                    </div>
                                </ShowcaseImgs>
                                {setRosterView !== undefined ? <RosterBtn className="slideRosterButton" onClick={() => { setRosterView(true); }}>View Roster</RosterBtn> : <></>}
                                {credits !== undefined ? <RosterBtn className="slideRosterButton" onClick={() => { setCreditsView(true); }}>View Credits</RosterBtn> : <></>}
                            </RightLayout>
                        </>
                }
            </Parent>
        </>
    )
}

export default PatchDetails