import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "@/config/config";

const MotionContainer = (props) => {
  return (
    <motion.div {...CUSTOM_MOTION_PROPS} className="motion-container">
      {props.children}
    </motion.div>
  );
};

export default MotionContainer;
