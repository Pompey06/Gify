// ReviewSwiper.jsx
import CustomSwiper from './CustomSwiper';
import rateIcon from '../../assets/rate.svg';
import avatarIcon from '../../assets/author.svg';
import leftBg from '../../assets/left-bg.png';
import rightBg from '../../assets/right-bg.png';

const reviews = [
  {
    name: 'Emily Davis',
    text: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
    rating: 5.0,
    author: 'CEO of GreenTech Solutions'
  },
  {
    name: 'Emily Davis',
    text: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
    rating: 5.0,
    author: 'CEO of GreenTech Solutions'
  },
  {
    name: 'Emily Davis',
    text: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
    rating: 5.0,
    author: 'CEO of GreenTech Solutions'
  },
  {
    name: 'Emily Davis',
    text: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
    rating: 5.0,
    author: 'CEO of GreenTech Solutions'
  },
  {
    name: 'Emily Davis',
    text: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
    rating: 5.0,
    author: 'CEO of GreenTech Solutions'
  },
  {
    name: 'John Smith',
    text: 'Рекомендую!',
    rating: 4.8,
    author: 'Мария'
  },
  {
    name: 'Alice Brown',
    text: 'Все понравилось.',
    rating: 4.9,
    author: 'Иван'
  },
];

const ReviewSwiper = () => {
  return (
    <div className="feedback-swiper-wrap">
      <img src={leftBg} alt="left bg" className="feedback-image feedback-image_left" />
      <CustomSwiper
        slidesPerView={5}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="rate">
              <img src={rateIcon} alt="Rating icon" className="rate__image" />
              {review.rating.toFixed(1)}
            </div>

            <p className="review-card__text">{review.text}</p>
            <div className="review-card__author">
              <img src={avatarIcon} alt="Author avatar" className="review-card__avatar" />
              <div className="review-card__author_info">
                <h3 className="review-card__name">{review.name}</h3>
                <p className="review-card__position">{review.author}</p>
              </div>
            </div>
          </div>
        ))}
      </CustomSwiper>
      <img src={rightBg} alt="right bg" className="feedback-image feedback-image_right" />
    </div>
  );
};

export default ReviewSwiper;
