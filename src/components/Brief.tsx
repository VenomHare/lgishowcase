import { Arena, Cons, Features } from "../../config/config"

const Brief = () => {
  return (<>
    <div className='Brief'>
      <ul className="featuresParent">
        <h1 className="briefTitle">Features</h1>
        {
          Features.map(str => <>
            <li className="briefdetail">{str}</li>
          </>)
        }
        <h1 className="briefTitle">Limitations</h1>
        {
          Cons.map(str => <>
            <li className="briefdetail">{str}</li>
          </>)
        }
      </ul>

      <div className="divider"></div>

      <ul className="arenaParent">
        <h1 className="briefTitle">Arena</h1>
        <div className="areana-contianer">
          {
            Arena.map(str => <>
              <li className="briefdetail">{str}</li>
            </>)
          }
        </div>
      </ul>

    </div>
  </>
  )
}

export default Brief