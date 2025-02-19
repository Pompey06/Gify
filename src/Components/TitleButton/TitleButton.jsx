import PropTypes from "prop-types";
import star from "../../assets/star.svg";
import "./TitleButton.css";

const TitleButton = ({ title, buttonText, title2, titleClass }) => {
   return (
      <div className="title-button">
         <div className="title-button__button">
            <img src={star} alt="" className="star" />
            {buttonText}
         </div>
         <h2 className={titleClass}>
            <span>{title2}</span> {title}{" "}
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
