import React, { useEffect, useState } from 'react'
import "./../styles/sorter.css"
import { SortingModPack} from '../../config/config'
import { RxCross2 } from "react-icons/rx";

type Props = {
    sortingList : SortingModPack[];
    setSortingList : React.Dispatch<React.SetStateAction<SortingModPack[]>>;
    tagList : string[];
}

const Sorter: React.FC<Props> = ({sortingList, setSortingList,tagList}) => {
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [mobileView, setMobileView] = useState(false);
    useEffect(()=>{
        if (activeTags.length === 0)
        {
            setSortingList(sortingList);
        }
        else 
        {
            let list : SortingModPack[] = []
            sortingList.forEach(item =>{
                for (let i = 0; i < activeTags.length; i++){
                    let tag = activeTags[i];
                    if(item.tags.includes(tag))
                    {
                        list.push(item);
                        break;
                    }
                }
            })
            console.log("Sorted List ", list);
            setSortingList(list);
        }
        console.log(sortingList);
    },[activeTags])


    return (
        <>
            <div className="filterBtn" onClick={()=>{setMobileView(true)}}>Filter Results</div>
            <div className="sorterParent" data-mobile={mobileView}>
                <h2>Filter Results</h2>
                <span className="clearButton" onClick={()=>{setActiveTags([])}}>
                    Clear Filters
                </span>
                <div className="tags-container">
                    {
                        tagList.map(tag => <>
                            {
                                activeTags.find((t) => t == tag) ?
                                    <div className="tagbox tagActive" onClick={()=>{
                                        setActiveTags((prev) => {
                                            return prev.filter(t => t !== tag);
                                        })
                                    }}>
                                        <span className='tagName'>{tag}</span>
                                        <span className='tagRemove'><RxCross2 /></span>
                                    </div>
                                : <div className='tagbox' onClick={()=>{
                                    setActiveTags([...activeTags, tag]);
                                }}>{tag}</div>
                            }
                        </>)
                    }
                </div>
                <div className="mobileApply" onClick={()=>{setMobileView(false)}}>Apply Filters</div>
            </div>
        </>
    )
}

export default Sorter