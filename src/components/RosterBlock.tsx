import React from 'react'
type Props = {
    thumbnail: string;
    title: string;
    children: React.ReactNode;
}
const RosterBlock : React.FC<Props> = ({children, title,thumbnail}) => {
    return (
        <div className='RosterBlockParent'>
            <div >
                <img  className="rosterThumbnail" src={thumbnail} alt="thumbail" />
            </div>
            <div className="listBlock">
                <div className="rosterTitle">{title}</div>
                <ul className="rosterlist">
                    <>
                        { children}
                    </>
                </ul>
            </div>
        </div>
    )
}

export default RosterBlock