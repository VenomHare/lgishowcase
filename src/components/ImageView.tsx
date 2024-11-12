import React, { useState } from 'react'
import './../styles/image.css'
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
                        <TransformWrapper>
                            <div className='openimageParent' key={key}>
                                <div className="imgInstruct">Double Tap or Pinch to ZOOM</div>
                                
                                <div className='openimageCancel' onClick={() => { setIsOpen(false) }}><RxCross2 /></div>
                                <TransformComponent>
                                    <img src={imageURL} alt={alt}  className='opennedImage'/>
                                </TransformComponent>
                            </div>
                        </TransformWrapper>
                    </>
            }
        </>
    )
}

export default ImageView