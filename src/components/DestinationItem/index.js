// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails

  return (
    <li className="destination">
      <img src={imgUrl} alt={name} className="image" />
      <p className="text">{name}</p>
    </li>
  )
}

export default DestinationItem
