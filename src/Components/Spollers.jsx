import arrow from "../assets/arrow.svg";
import arrow_active from "../assets/active__arrow.svg";
import { useState } from "react";
const Spollers = () => {
   const [activeIndex, setActiveIndex] = useState(null);

   const toggleSpoiler = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   const spollers = [
      {
         title: "What is GIFY AI?",
         content:
            "GIFY AI is an advanced AI-powered tool that brings static images to life by transforming them into smooth, frame-consistent animations. It provides precise control over facial expressions, camera dynamics, and artistic visualization, making it perfect for character-based and commercial applications.",
      },
      {
         title: "How does GIFY AI work?",
         content:
            "GIFY AI uses an enhanced Image-to-Video (I2V) model that analyzes static images and generates high-quality animations. The AI ensures realistic motion, and seamless transitions.",
      },
      {
         title: "Can I mint my animated images as NFTs?",
         content:
            "Yes! GIFY AI allows you to mint your animations as NFTs directly on supported blockchain platforms. You can also download your animated content for personal use or sharing.",
      },
      {
         title: "What types of images can I animate?",
         content:
            "GIFY AI supports portraits, characters, artwork, and various objects. Whether you want to animate a face, a piece of digital art, or a brand logo, our AI provides natural and engaging motion effects.",
      },
      {
         title: " What are the system requirements for using GIFY AI?",
         content:
            "GIFY AI is a cloud-based platform, meaning you don’t need a powerful computer to use it. However, a strong internet connection ensures faster uploads and smoother previews.",
      },
   ];

   return (
      <div className="spoilers">
         {spollers.map((spoiler, index) => (
            <div
               key={index}
               className={`spoiler__wrapper ${activeIndex === index ? "active" : ""}`}
               onClick={() => toggleSpoiler(index)}
            >
               <div className="spoiler">
                  <div className="spoiler__title">{spoiler.title}</div>
                  <img src={activeIndex === index ? arrow_active : arrow} alt="" className="arrow" />
               </div>
               <div className="spoiler__content">{spoiler.content}</div>
            </div>
         ))}
      </div>
   );
};
export default Spollers;
