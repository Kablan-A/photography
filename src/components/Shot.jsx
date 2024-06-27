import { useState } from "react";
import { motion } from "framer-motion";
import ShotModal from "../components/ShotModal";

function Shot({ img }) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 0.97 }}
        whileTap={{ scale: 0.95 }}
        className="shot w-auto overflow-hidden rounded-3"
        onClick={() => handleShow()}
      >
        <p className="shot__title px-1">Click to resize</p>
        <img
          src={img}
          alt={"shot"}
          className="shot__image object-fit-cover img-width-height"
        />
      </motion.div>

      <ShotModal
        show={showModal}
        img={img}
        title={"Looks cool"}
        hidefn={handleClose}
      />
    </>
  );
}

export default Shot;
