import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimatedLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.1 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default AnimatedLayout;
