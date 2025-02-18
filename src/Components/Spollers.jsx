import arrow from '../assets/arrow.svg'
import arrow_active from '../assets/active__arrow.svg'
import { useState } from 'react';
const Spollers = () => { 
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSpoiler = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="spoilers">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`spoiler__wrapper ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleSpoiler(index)}
        >
          <div className="spoiler">
            <div className="spoiler__title">
              Text Text Text Text Text Text Text
            </div>
            <img src={activeIndex === index ? arrow_active : arrow} alt="" className="arrow" />
          </div>
          <div className="spoiler__content">
            Al support can shorten development cycles by automating or speeding up many steps in the software development process.
          </div>
        </div>
      ))}
    </div>
  )
}
export default Spollers;