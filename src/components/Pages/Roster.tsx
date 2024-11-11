import Footer from '../Footer'
import './../../styles//roster.css'
import NavBar from './../NavBar'
import RosterBlock from "./../RosterBlock"
import {DeluxeList, ExclusiveList, LimitedList} from './../RosterLists'
const Roster = () => {
  const thumbnail = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/1_jk6u4z.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317639/2_orgr2g.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/3_skbost.png"
  
  ]
  return (
    <>
      <NavBar active={"roster"} />
      <div className='rosterParent'>

        <div className="rosterHeader">
          <h1>Roster</h1>
        </div>
        <RosterBlock thumbnail={thumbnail[0]} title='Limited Edition' >
          {LimitedList()}
        </RosterBlock>
        <RosterBlock thumbnail={thumbnail[1]} title='Exclusive Edition'>
          {ExclusiveList()}
        </RosterBlock>
        <RosterBlock thumbnail={thumbnail[2]} title='Deluxe Edition'>
          {DeluxeList()}
        </RosterBlock>
      </div>
      <Footer/>
    </>
  )
}

export default Roster