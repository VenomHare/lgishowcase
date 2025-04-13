import React from 'react'
type Props = {
    title: string;
    children: React.ReactNode;
}
const RosterBlock : React.FC<Props> = ({children, title,}) => {
    return (
        <div className={"LimitedEditionRoster w-full flex justify-center "} >
            <div className="w-[90svw] md:w-[70svw] border-2 border-primary p-10 rounded-xl bg-black-background">
                <div className="text-5xl font-bold font-Jost my-6 text-primary text-shadow ">{title}'s Roster </div>
                <ul className="text-lg font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-left">
                    <>
                        { children}
                    </>
                </ul>
            </div>
        </div>
    )
}

export default RosterBlock