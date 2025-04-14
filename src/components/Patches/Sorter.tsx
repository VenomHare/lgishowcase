import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Button } from 'flowbite-react';
import { SortingModPack } from '../../types';

type Props = {
    sortingList : SortingModPack[];
    setSortingList : React.Dispatch<React.SetStateAction<SortingModPack[]>>;
    tagList : string[];
}

const Sorter: React.FC<Props> = ({sortingList, setSortingList,tagList}) => {
    const [activeTags, setActiveTags] = useState<string[]>([]);

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
            setSortingList(list);
        }
    },[activeTags])


    return (
        <>
            <div className="flex flex-col-reverse md:flex-row-reverse  items-center border border-gray-400 rounded-lg bg-gray-700/9 p-3 lg:w-[70svw] my-2" >
                <Button outline color="red" className="lg:w-[15svw] xl:w-[10svw] 2xl:w-[7.5svw]" onClick={()=>{setActiveTags([])}}>
                    Clear Filters
                </Button>
                <div className="flex p-1 m-1 w-[70svw] gap-1 flex-wrap justify-center lg:justify-start">
                    {
                        tagList.map((tag, i) => <>
                            {
                                activeTags.find((t) => t == tag) ?
                                    <Button size={"sm"} color="red" key={i} className="flex gap-1" onClick={()=>{
                                        setActiveTags((prev) => {
                                            return prev.filter(t => t !== tag);
                                        })
                                    }}>
                                        <span className='tagName'>{tag}</span>
                                        <span className='tagRemove'><RxCross2 /></span>
                                    </Button>
                                : <Button outline color='gray' key={i} className='' size='sm' onClick={()=>{
                                    setActiveTags([...activeTags, tag]);
                                }}>{tag}</Button>
                            }
                        </>)
                    }
                </div>
                {/* <Button className='lg:hidden w-[7.5svw]'color={"red"} onClick={()=>{setMobileView(false)}}>Apply Filters</Button> */}
            </div>
        </>
    )
}

export default Sorter