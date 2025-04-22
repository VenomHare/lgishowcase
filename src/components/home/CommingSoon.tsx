import { Button, Carousel } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { ModPack } from "../../types";

interface Props {
  mod: ModPack
}

const CommingSoon = ({ mod }: Props) => {

  const navigate = useNavigate();

  return (<>
    <h5 className='text-5xl font-bold font-Jost mt-15 italic text-primary text-shadow-sm text-shadow-black animate-fadeInOutBack'>Comming Soon</h5>
    <div className='min-h-[75svh] w-full flex justify-center lg:min-h-0 mb-2' style={{marginTop: "2rem"}}>
      <div className="CommingSoonBoxGrid w-[90%] h-full p-5 md:p-5 border-3 border-primary rounded-2xl shadow-md gap-8 justify-items-center">
        <div className="CommingSoonTitle flex flex-col gap-3 text-center justify-center md:w-full">
          <div className='text-3xl font-bold lg:text-5xl'>
            {mod.name}
          </div>

          <div className=' text-md font-semibold lg:text-md text-gray-400'>
            {(mod.description && mod.description?.length > 200) ? <>
              {mod.description?.slice(0, 200)}...
              <span className="underline cursor-pointer hover:text-primary" onClick={() => { navigate(`/patches/${mod.id}`) }}>Read More</span>
            </> : <>
              {mod.description}
            </>}
          </div>
        </div>

        <div className='CommingSoonCarousel w-[95%] h-60 md:h-70 lg:h-100 lg:w-[30svw] rounded-2xl '>
          <Carousel pauseOnHover draggable color='red'>
            {
              mod.showcaseImgs.map((imageURL, i) =>
                <img src={imageURL} alt={`${mod.name} ${i}}`} key={i} />
              )
            }
          </Carousel>
        </div>
        
        <div className='CommingSoonButtons w-full flex flex-col items-center justify-center text-center gap-4'>
          <Button onClick={() => { window.open(mod.purchaseLink) }} color={"red"} size='lg' className='w-[95%] text-xl font-semibold'>
            Pre Order
          </Button>

          <Button onClick={() => { navigate(`/patches/${mod.id}`) }} outline color={"gray"} size='lg' className='w-[95%] '>
            More Info
          </Button>
        </div>

        <div className='CommingSoonLaunch w-full h-20 text-5xl font-bold font-Cursive flex items-center justify-center'>
            Launching Soon...
        </div>
      </div>
    </div>
  </>
  )
}

export default CommingSoon