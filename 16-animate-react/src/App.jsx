import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [x, setX] = useState(300);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return <motion.div id="demo"></motion.div>;
}

export default App;
