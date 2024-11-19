import { rosterDeluxeThumbnail, rosterLimitedThumbnail } from '../../../config/config'
import Footer from '../Footer'
import './../../styles//roster.css'
import NavBar from './../NavBar'
import RosterBlock from "./../RosterBlock"
import LimitedRosterNames from './../../assets/LimitedRosterNames.txt'
import DeluxeRosterNames from './../../assets/DeluxeRosterNames.txt'
import RosterLists from '../RosterLists'

const Roster = () => {

  return (
    <>
      <NavBar active={"roster"} />
      <div className='rosterParent'>

        <div className="rosterHeader">
          <h1>Roster</h1>
        </div>

        <RosterBlock thumbnail={rosterLimitedThumbnail} title='Limited Edition'>
          <RosterLists filepath={LimitedRosterNames} />
        </RosterBlock>
        <RosterBlock thumbnail={rosterDeluxeThumbnail} title='Deluxe Edition'>
          <RosterLists filepath={DeluxeRosterNames} />
          </RosterBlock>
      </div>
      <Footer/>
    </>
  )
}

export default Roster