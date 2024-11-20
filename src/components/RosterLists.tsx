import React, { useEffect, useState } from 'react'

const RosterLists:React.FC<{filepath: string}> = ({filepath}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        fetch(filepath)
        .then((response) => response.text().then((data) => {
            let n = data.split('\n');
            setNames(n);
        }))
        .catch((error) => {
            console.error("Error fetching the text file:", error);
            setIsLoading(false);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [])

    if (isLoading){
        return <div> Roster is Loading</div>
    }
    return (
        <>{
            names.map((n,i)=><div key={i}>{n}</div>)
        }</>
    )
}
export default RosterLists