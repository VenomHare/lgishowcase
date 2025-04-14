import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type Props = {
    imageURL: string;
    classname?: string;
    alt?: string;
    key?: string;
}

const ImageView: React.FC<Props> = ({ imageURL, classname, alt, key }) => {
    classname = classname || "";
    alt = alt || "";

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {
                !isOpen
                    ?
                    <img src={imageURL} alt={alt} className={classname} onClick={() => { setIsOpen(!isOpen) }} key={key} />
                    : <>
                        <TransformWrapper key={key}>
                            <div className='overflow-hidden w-screen h-screen fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] bg-black/70 flex justify-center items-center flex-col gap-[5vh]'>
                                <div className="hidden md:block text-white text-sm mb-2">Double Tap or Pinch to ZOOM</div>
                                
                                <div className='fixed bg-amber-50 top-[5svh] right-[5svw] text-[4svh] w-[5svw] h-[5svh] cursor-pointer bg-aliceblue text-black rounded z-[1000] shadow-[0_0_10px_10px_#000] grid place-items-center' onClick={() => { setIsOpen(false) }}><RxCross2 /></div>
                                <TransformComponent>
                                    <img src={imageURL} alt={alt}  className='max-w-[85svw] max-h-[90svh] md:max-w-full md:max-h-[80svh] rounded-lg'/>
                                </TransformComponent>
                            </div>
                        </TransformWrapper>
                    </>
            }
        </>
    )
}

export default ImageView