import { Arena, Cons, Features } from "../../config/config"

const Brief = () => {
  return (
    <div className="Brief">
      <ul className="featuresParent">
        <h1 className="briefTitle">Features</h1>
        {Features.map((feature, index) => (
          <li key={`feature-${index}`} className="briefdetail">
            {feature}
          </li>
        ))}

        <h1 className="briefTitle">Limitations</h1>
        {Cons.map((limitation, index) => (
          <li key={`limitation-${index}`} className="briefdetail">
            {limitation}
          </li>
        ))}
      </ul>

      <div className="divider" />

      <ul className="arenaParent">
        <h1 className="briefTitle">Arena</h1>
        <div className="arena-container">
          {Arena.map((item, index) => (
            <li key={`arena-${index}`} className="briefdetail">
              {item}
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Brief