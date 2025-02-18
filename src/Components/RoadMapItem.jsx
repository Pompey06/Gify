import line_left from '../assets/left-line.svg'
import line_right from '../assets/right-line.svg'

const RoadMapItem = (
  { title, list, icon, type, isLast= false }
) => { 
  const lineImage = type === 'left' ? line_right : line_left;

  return (
    <div className={`roadmap__card_wrapper ${type}`} >
      <div className={`roadmap__card ${type}`}>
        <img src={icon} alt="" className="roadmap__card_icon" />
        <div className="roadmap__card_content">
        <h4 className="roadmap__card_title">{title}</h4>
        <ul className="roadmap__card_list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      </div>
      {!isLast && <img src={lineImage} alt="" className="roadmap__image" />}
    </div>
  )
}
export default RoadMapItem;