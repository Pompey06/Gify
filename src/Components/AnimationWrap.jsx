/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimationWrap = ({
   children,
   delay = 0,
   duration = 0.5,
   direction = "y",
   distance = 50,
   className = "",
   noAnimate = false,
}) => {
   const [isInView, setIsInView] = useState(false);
   const [animationComplete, setAnimationComplete] = useState(false);

   const initialPosition = direction === "x" ? { x: distance } : { y: distance };

   const defState = noAnimate
      ? {}
      : {
           opacity: 0,
           ...initialPosition,
        };

   const inViewState = noAnimate ? {} : { opacity: 1, x: 0, y: 0 };

   useEffect(() => {
      if (isInView) {
         setIsInView(true);
      }
   }, [isInView]);

   useEffect(() => {
      if (isInView) {
         setTimeout(() => setAnimationComplete(true), delay * 1000 + duration * 1000);
      }
   }, [isInView, delay, duration]);

   return (
      <motion.div
         initial={defState}
         whileInView={() => {
            setIsInView(true);
            return inViewState;
         }}
         transition={{ duration, delay }}
         viewport={{ once: true, amount: 0.5 }}
         className={`${className} ${animationComplete ? "_animate" : ""}`}
      >
         {children}
      </motion.div>
   );
};

export default AnimationWrap;
