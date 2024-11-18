import { useState } from 'react';
import './../styles/slides.css'
import DisplayBlock from './DisplayBlock';
import { ModList, ModPack } from '../../config/config';

type Props = {
    setPurchaseVar : React.Dispatch<React.SetStateAction<boolean>>,
    setModData: React.Dispatch<React.SetStateAction<ModPack>>,
    ModData: ModPack;

}

const DisplayProducts : React.FC<Props>= ({setPurchaseVar, setModData, ModData}) => {
    // const [curPack, setCurPack] = useState<ModPack>(ModList[0]);

    const handleChange = (e:React.FormEvent<HTMLSelectElement>)=>{
        const target = e.target as HTMLSelectElement; 
        const data  = ModList.find((mod)=>mod.id == target.value) || ModList[0];
        setModData(data);
    }



    return (<>
        <div className="displaybox">
            <div className="switches">
                <div className="dropswitches">
                    <select onChange={handleChange} defaultValue={"basic"}>
                        {
                            ModList.map((mod, index)=>{
                                return<>
                                    {
                                        mod.homeShowcase ?
                                            <option key={index} value={mod.id} >{mod.name}</option>
                                        :<></>
                                    }
                                </>
                            })
                        }
                    </select>
                </div>
                {
                    ModList.map((m, index)=>{
                        return<>
                        {
                            m.homeShowcase ?
                                <div className='switch' key={index} data-active={ModData?.id == m.id} onClick={()=>{setModData(m)}}>{m.name}</div>
                            : <></>
                        }
                    </>})
                }
            </div>
            <>
                <DisplayBlock imgURLs={ModData?.showcaseImgs} thumbnail={ModData.thumbnail} onClick={()=>{setPurchaseVar(true)}}/>
            </>
        </div>
    </>
    )
}

export default DisplayProducts