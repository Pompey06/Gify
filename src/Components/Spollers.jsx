import arrow from '../assets/arrow.svg'
import arrow_active from '../assets/active__arrow.svg'

const Spollers = () => { 
  return (
    <div className="spoilers">
        <div className="spoiler__wrapper">
          <div className="spoiler">
            <div className="spoiler__title">
            Text Text Text Text Text Text Text
            </div>
            <img src={arrow} alt="" className="arrow" />
          </div>
          <div className="spoiler__content">
            Al support can shorten development cycles by automating or speeding up many steps in the software development process.
          </div>
        </div>
        <div className="spoiler__wrapper active">
          <div className="spoiler">
            <div className="spoiler__title">
            Text Text Text Text Text Text Text
            </div>
            <img src={arrow_active} alt="" className="arrow" />
          </div>
          <div className="spoiler__content">
            Al support can shorten development cycles by automating or speeding up many steps in the software development process.
          </div>
        </div>
        <div className="spoiler__wrapper active">
          <div className="spoiler">
            <div className="spoiler__title">
            Text Text Text Text Text Text Text
            </div>
            <img src={arrow_active} alt="" className="arrow" />
          </div>
          <div className="spoiler__content">
            Al support can shorten development cycles by automating or speeding up many steps in the software development process.
          </div>
        </div>
        <div className="spoiler__wrapper active">
          <div className="spoiler">
            <div className="spoiler__title">
            Text Text Text Text Text Text Text
            </div>
            <img src={arrow_active} alt="" className="arrow" />
          </div>
          <div className="spoiler__content">
            Al support can shorten development cycles by automating or speeding up many steps in the software development process.
          </div>
        </div>
        <div className="spoiler__wrapper active">
          <div className="spoiler">
            <div className="spoiler__title">
            Text Text Text Text Text Text Text
            </div>
            <img src={arrow_active} alt="" className="arrow" />
          </div>
          <div className="spoiler__content">
            Al support can shorten development cycles by automating or speeding up many steps in the software development process.
          </div>
        </div>
      </div>
  )
}
export default Spollers;