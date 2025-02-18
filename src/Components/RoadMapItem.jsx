const RoadMapItem = (
  { title, list, icon, type }
) => { 
  return (
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
  )
}
export default RoadMapItem;