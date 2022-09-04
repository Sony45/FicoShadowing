import { FaStar } from "react-icons/fa";

const Rating = ({rate}) => {
  return Array(5).fill().map((item, i) => <Star key={i} selected={rate > i}/>)
}

const Star = ({ selected }) =>
  <FaStar color={ selected ? '#ff9f00' : 'gray'}/>

export default Rating;