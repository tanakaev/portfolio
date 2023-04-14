import React from "react";
import styles from "../../assets/styles/Lens.module.css";

const Lens = React.forwardRef((props, ref) => {
  return <div className={styles.lens} ref={ref} style={props.style}></div>;
});

export default Lens;
