import { Badge, Button, Carousel } from "flowbite-react"
import { SortingModPack } from "../../types"

interface Props {
    mod: SortingModPack
}

const ModsDisplayBlock = ({mod}:Props) => {
    return (
        <div className="w-[250px] md:w-[250px] xl:w-[300px] h-[40svh] md:h-[45svh] flex flex-col gap-4 bg-black-background border border-primary p-4 rounded-lg">
            <div className="flex gap-1 w-full ">
                {
                    mod.tags.map((tag, i)=>
                        <Badge key={i} color="red" >{tag}</Badge>
                    )
                }
            </div>
            <Carousel pauseOnHover>
                {
                    mod.imagesURL.map((imageUrl,i)=> 
                    <img key={i} src={imageUrl} alt={`${mod.id} ${i}`}/>)
                }
            </Carousel>
            <Button color="red" onClick={()=>{window.open(mod.downloadLink)}}>Download</Button>
        </div>
    )
}

export default ModsDisplayBlock