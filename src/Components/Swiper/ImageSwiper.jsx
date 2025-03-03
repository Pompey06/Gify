// ImageSwiper.jsx
import CustomSwiper from './CustomSwiper';
import slideImg from '../../assets/slide.png'; // Импорт изображения

const images = [
  { src: slideImg, alt: 'Изображение 1' },
  { src: slideImg, alt: 'Изображение 2' },
  { src: slideImg, alt: 'Изображение 3' },
  { src: slideImg, alt: 'Изображение 4' },
  { src: slideImg, alt: 'Изображение 5' },
  { src: slideImg, alt: 'Изображение 6' },
  { src: slideImg, alt: 'Изображение 7' },
  { src: slideImg, alt: 'Изображение 8' },
  { src: slideImg, alt: 'Изображение 9' },
];

//const groupImages = (images, chunkSize) => {
//  const groups = [];
//  for (let i = 0; i < images.length; i += chunkSize) {
//    groups.push(images.slice(i, i + chunkSize));
//  }
//  return groups;
//};

// const groupedImages = groupImages(images, 3);

const ImageSwiper = () => {
  return (
    <CustomSwiper
      slidesPerView={3}
      slidesPerView1024={2}
      slidesPerView1600={3}
      autoplay={true}
      
      navigation={false}  // Убираем стрелки
      pagination={{ clickable: true }}
    >
      {/* {groupedImages.map((group, index) => (
        <div key={index} className="slide-group">
          {group.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="group-image"
            />
          ))}
        </div>
      ))} */}
      {
        images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="group-image"
          />
        ))
      }
    </CustomSwiper>
  );
};

export default ImageSwiper;
