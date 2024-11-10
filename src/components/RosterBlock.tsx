import React, { useState } from 'react'
type Props = {
    thumbnail: string;
    title: string;
    children: React.ReactNode;
}
const RosterBlock : React.FC<Props> = ({children, title,thumbnail}) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className='RosterBlockParent'>
            <div >
                <img  className="rosterThumbnail" src={thumbnail} alt="thumbail" />
            </div>
            <div className="listBlock">
                <div className="rosterTitle">{title}</div>
                    <button onClick={()=>{setVisible(!visible)}} className='RosterButton'>{visible?<>Hide Roster</>:<>Show Roster</>}</button>
                <ul className="rosterlist rosterPC">
                    <>
                        { children}
                    </>
                </ul>
                
                <ul className="rosterlist rosterMobile">
                    <>
                        { visible ? children : <></>}
                    </>
                </ul>
                
            </div>
        </div>
    )
}

export default RosterBlock