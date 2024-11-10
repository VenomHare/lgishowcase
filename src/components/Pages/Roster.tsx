import Footer from '../Footer'
import './../../styles//roster.css'
import NavBar from './../NavBar'
import RosterBlock from "./../RosterBlock"
import {DeluxeList, ExclusiveList, LimitedList} from './../RosterLists'
const Roster = () => {
  const LimitedThumb = "https://media.discordapp.net/attachments/1304332618698985533/1304334897925853196/3.png?ex=6731a709&is=67305589&hm=c7e2fe06c156da9dc501655b4a26958dcc10d0828510c0a89a90f08ab7a79a56&=&format=webp&quality=lossless";
  const ExclusiveThumb= "https://media.discordapp.net/attachments/1304332618698985533/1304334897275731989/1.png?ex=6731a708&is=67305588&hm=cfd59187598f6815ef3862f00e59ac14bdbb5da33bb6a1b2655c40e147082454&=&format=webp&quality=lossless";
  const DeluxeThumb = "https://media.discordapp.net/attachments/1304332618698985533/1304334897644572672/2.png?ex=6731a708&is=67305588&hm=9d5cca7ca8a7f1458e0b2e567b112ff25feeadd1943cb80e171cd9b9283544b0&=&format=webp&quality=lossless";
  
  return (
    <>
      <NavBar active={"roster"} />
      <div className='rosterParent'>

        <div className="rosterHeader">
          <h1>Roster</h1>
        </div>
        <RosterBlock thumbnail={LimitedThumb} title='Limited Edition' >
          {LimitedList()}
        </RosterBlock>
        <RosterBlock thumbnail={ExclusiveThumb} title='Exclusive Edition'>
          {ExclusiveList()}
        </RosterBlock>
        <RosterBlock thumbnail={DeluxeThumb} title='Deluxe Edition'>
          {DeluxeList()}
        </RosterBlock>
      </div>
      <Footer/>
    </>
  )
}

export default Roster