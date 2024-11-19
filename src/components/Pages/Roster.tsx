import { rosterDeluxeThumbnail, rosterExclusiveThumbnail, rosterLimitedThumbnail } from '../../../config/config'
import Footer from '../Footer'
import './../../styles//roster.css'
import NavBar from './../NavBar'
import RosterBlock from "./../RosterBlock"
import {DeluxeList, ExclusiveList, LimitedList} from './../RosterLists'
const Roster = () => {

  return (
    <>
      <NavBar active={"roster"} />
      <div className='rosterParent'>

        <div className="rosterHeader">
          <h1>Roster</h1>
        </div>
        <RosterBlock thumbnail={rosterLimitedThumbnail} title='Limited Edition' >
          {LimitedList()}
        </RosterBlock>
        <RosterBlock thumbnail={rosterExclusiveThumbnail} title='Exclusive Edition'>
          {ExclusiveList()}
        </RosterBlock>
        <RosterBlock thumbnail={rosterDeluxeThumbnail} title='Deluxe Edition'>
          {DeluxeList()}
        </RosterBlock>
      </div>
      <Footer/>
    </>
  )
}

export default Roster