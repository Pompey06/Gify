import PropTypes from "prop-types";
import star from "../../assets/star.svg";
import "./TitleButton.css";
import AnimationWrap from "../AnimationWrap";

const TitleButton = ({ title, buttonText, title2, titleClass, animationClass = 'animation__bottom_t' }) => {
  return (
    <div className="title-button">
      <AnimationWrap
        noAnimate
        delay={0.2}
        className="animation__top_t title-button__button"
      >
        <img src={star} alt="" className="star" />
        {buttonText}
      </AnimationWrap>
      <h2>
        <AnimationWrap noAnimate className={titleClass + " " + animationClass}>
          <span>{title2}</span> {title}{" "}
        </AnimationWrap>
      </h2>
    </div>
  );
};

TitleButton.propTypes = {
  title: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  title2: PropTypes.string,
  titleClass: PropTypes.string,
};

TitleButton.defaultProps = {
  onClick: () => {},
};

export default TitleButton;
