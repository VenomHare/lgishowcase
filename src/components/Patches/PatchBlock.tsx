import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Badge, Button } from 'flowbite-react';
import { SortingModPack } from '../../types';

type Props = {
    mod: SortingModPack
}

const PatchBlock: React.FC<Props> = ({ mod }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='w-[250px] md:w-[250px] xl:w-[300px] h-[40svh] md:h-[45svh] flex flex-col gap-4 bg-black-background border border-primary p-4 rounded-lg'>
                <div className="flex gap-1 w-full ">
                    {
                        mod.tags.map((tag, i) =>
                            <Badge key={i} color="red">{tag}</Badge>
                        )
                    }
                </div>
                
                <img className='h-[20svh] md:h-[25svh] object-contain rounded' src={mod.thumbnail} alt={mod.id} />
                <div className="text-xl font-semibold">{mod.title}</div>
                <Button outline color="red" onClick={() => { navigate(`/patches/${mod.id}`) }}>View More</Button>
            </div>
        </>
    )
}

export default PatchBlock