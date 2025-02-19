import { motion } from 'framer-motion';

const AnimationWrap = ({ children, delay = 0, duration = 0.5, direction = 'y', distance = 50 }) => {
  const initialPosition = direction === 'x' ? { x: distance } : { y: distance };

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPosition }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrap;