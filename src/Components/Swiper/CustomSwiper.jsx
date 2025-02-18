import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/bundle';

const CustomSwiper = ({
  children,
  slidesPerView = 1,
  slidesPerView1024 = 1,
  slidesPerView1600 = 1,
  spaceBetween = 10,
  navigation = true,
  pagination = { clickable: true },
  autoplay = false, 
  ...rest
}) => {
  if (!children || React.Children.count(children) === 0) {
    return null;
  }

  const autoplayConfig = autoplay === true 
    ? { delay: 3000, disableOnInteraction: false }
    : autoplay === false 
      ? false 
      : autoplay;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={navigation}
      pagination={pagination}
      autoplay={autoplayConfig}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: slidesPerView1024,
        },
        1600: {
          slidesPerView: slidesPerView1600,
        },
        1601: {
          slidesPerView: slidesPerView,
        },
      }}
      {...rest}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide key={child.key || crypto.randomUUID()}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

CustomSwiper.propTypes = {
  children: PropTypes.node.isRequired,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
  navigation: PropTypes.bool,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  autoplay: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      delay: PropTypes.number,
      disableOnInteraction: PropTypes.bool,
      // другие свойства autoplay
    })
  ]),
};

export default CustomSwiper;