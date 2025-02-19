// ReviewSwiper.jsx
import CustomSwiper from "./CustomSwiper";
import rateIcon from "../../assets/rate.svg";
import leftBg from "../../assets/left-bg.png";
import rightBg from "../../assets/right-bg.png";
import michael from "../../assets/michael.png";
import sophia from "../../assets/sophia.png";
import james from "../../assets/james.png";
import lucas from "../../assets/lucas.png";
import ethan from "../../assets/ethan.jpg";
import matthew from "../../assets/matthew.jpg";
import tyler from "../../assets/tyler.jpg";
import samantha from "../../assets/samantha.jpg";

const reviews = [
   {
      name: "Samantha Turner",
      text: "Actually, the utility allows creating viral videos from photos. It's very useful for running my TikTok channel. Thanks to the Gify team!",
      rating: 4.9,
      author: "TikTok Content Strategist",
      icon: samantha,
   },
   {
      name: "Michael Thompson",
      text: "Absolutely blown away by how easy it is to create viral videos from just a photo! The AI did all the heavy lifting, and minting it as an NFT was seamless. This is a game-changer for content creators!",
      rating: 4.8,
      author: "Digital Creator",
      icon: michael,
   },
   {
      name: "Sophia Miller",
      text: "I was able to bring my selfie to life and turn it into a video — it went viral on TikTok. Thank you for this amazing opportunity",
      rating: 5.0,
      author: "TikTok Creator",
      icon: sophia,
   },
   {
      name: "Tyler Evans",
      text: "I made a video with my old NFT and then created a new live NFT in MP4 format thanks to Gify",
      rating: 5.0,
      author: "Crypto Enthusiast & NFT Investor",
      icon: tyler,
   },
   {
      name: "James Parker",
      text: "As a tech specialist, I'm amazed at how well the AI works. I love the combination of AI + NFT — it's something new in the AI market. I believe this project has huge potential",
      rating: 4.9,
      author: "Tech Analyst & Blockchain Enthusiast",
      icon: james,
   },
   {
      name: "Lucas Mitchell",
      text: "Honestly, I didn't expect it to work this well. I uploaded a photo, and the AI turned it into a dynamic video. The NFT minting process was simple and smooth. Definitely going to use this more",
      rating: 5.0,
      author: "Digital Creator",
      icon: lucas,
   },
   {
      name: "Ethan Rodriguez",
      text: "I've tried other AI  tools, but this one stands out among them. It is easy to use and really delivers on its promises. Turning a simple photo into an engaging video and then turning it into an NFT is awesome. Definitely worth a try",
      rating: 4.9,
      author: "Content Maker",
      icon: ethan,
   },
   {
      name: "Matthew Harris",
      text: "I was skeptical at first, but the NFT minting actually works — and that's what matters most. The team is honest and did everything with high quality. Glad to have been part of the beta testing group",
      rating: 5.0,
      author: "Beta Tester & Crypto Enthusiast",
      icon: matthew,
   },
];

const ReviewSwiper = () => {
   return (
      <div className="feedback-swiper-wrap">
         <img src={leftBg} alt="left bg" className="feedback-image feedback-image_left" />
         <CustomSwiper
            slidesPerView={5}
            slidesPerView1024={3}
            slidesPerView1600={3}
            autoplay={true}
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
                     <img src={review.icon} alt="Author avatar" className="review-card__avatar" />
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
